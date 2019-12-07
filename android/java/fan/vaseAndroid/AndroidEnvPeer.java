package fan.vaseAndroid;

import android.app.Activity;
import android.content.Context;
import android.os.Handler;
import android.os.Looper;
import android.text.ClipboardManager;
import android.util.DisplayMetrics;
import android.view.WindowManager;
import fan.concurrent.Actor;
import fan.vaseWindow.Toolkit;
import fan.vaseWindow.Window;
import fan.sys.Func;
import fan.vaseWindow.Clipboard;

public class AndroidEnvPeer {
  public static AndroidEnvPeer make(AndroidEnv self)
  {
    AndroidEnvPeer peer = new AndroidEnvPeer();
    return peer;
  }

  public static boolean isMainThread() {
    return Looper.getMainLooper().getThread() == Thread.currentThread();
  }

  public static void init(Activity context)
  {
    Actor.locals().set("vaseGraphics.env", AndGfxEnv.instance);
    Actor.locals().set("vaseWindow.env", AndToolkit.getInstance(context));

    if (isMainThread()) {
      Toolkit.tryInitAsyncRunner();
    }
  }

  static class AndToolkit extends Toolkit
  {
    static AndToolkit instance = null;

    private Activity context;
    long dpi = 326;
    Handler handler;
    double density = 2.0f;

    private AndWindow curWindow = null;

    static AndToolkit getInstance(Activity context) {
      if (instance == null) instance = new AndToolkit(context);
      return instance;
    }

    public AndToolkit(Activity context)
    {
      this.context = context;

      DisplayMetrics metrics = new DisplayMetrics();
      WindowManager mWm = context.getWindowManager();
      if (mWm != null) {
        mWm.getDefaultDisplay().getMetrics(metrics);
        float dpi = (float) Math.ceil(Math.max(Math.max(metrics.xdpi, metrics.ydpi),
            metrics.densityDpi));
        this.dpi = (long)dpi;
        density = metrics.density;
      }
      
      handler = new Handler();
    }

    @Override
    public Window window(fan.vaseWindow.View view)
    {
      if (view != null) {
        curWindow = new AndWindow(context, view);
        curWindow.show(null);
      }
      return curWindow;
    }

    @Override
    public void callLater(long daly, final fan.sys.Func f)
    {
      handler.postDelayed(new Runnable() {
          public void run()
          {
            f.call();
          }
        }, daly);
    }

    @Override
    public String name() {
      return "Android";
    }

    @Override
    public long dpi() {
      return dpi;
    }
    
    @Override
    public double density() {
      return density;
    }

    private static Clipboard m_clipboard;

    public Clipboard clipboard() {
      if (m_clipboard == null) {
        m_clipboard = new Clipboard() {
          private android.text.ClipboardManager sysClipboard = (ClipboardManager)context.getSystemService(Context.CLIPBOARD_SERVICE);

          public String getText(Func callback) {
            try {
//              android.content.ClipData abc = sysClipboard.getPrimaryClip();
//              android.content.ClipData.Item item = abc.getItemAt(0);
//              String text = item.getText().toString();
            	String text = sysClipboard.getText().toString();

              callback.call(text);
              return text;
            } catch (Exception e) {
              e.printStackTrace();
              callback.call(null);
              return null;
            }
          }

          public void setText(String text) {
              //android.content.ClipData myClip = android.content.ClipData.newPlainText("text", text);
              //sysClipboard.setPrimaryClip(myClip);
        	  sysClipboard.setText(text);
          }
        };
      }
      return m_clipboard;
    }
  }
}