//
// Copyright (c) 2011, chunquedong
// Licensed under the Academic Free License version 3.0
//
// History:
//   2011-7-4  Jed Young  Creation
//

fan.fanvasWindow.WtkWindow = fan.sys.Obj.$extend(fan.sys.Obj);
fan.fanvasWindow.WtkWindow.prototype.$ctor = function() {}
fan.fanvasWindow.WtkWindow.prototype.$typeof = function() {
  return fan.fanvasWindow.WtkWindow.$type;
}
fan.fanvasWindow.WtkWindow.prototype.list = new Array();

//////////////////////////////////////////////////////////////////////////
// cavans
//////////////////////////////////////////////////////////////////////////

fan.fanvasWindow.WtkWindow.prototype.add = function(view)
{
  if (view.willTextChange) {
    this.root.appendChild(this.createEditText(view));
  } else {
    this.list.push(view);
  }
  return this;
}

fan.fanvasWindow.WtkWindow.prototype.createEditText = function(view) {
  var jsEditText = new fan.fanvasWindow.WtkEditText();
  jsEditText.m_win = this;
  view.host$(jsEditText);
  jsEditText.view = view;

  var field = document.createElement("input");
  field.type = "text";
  field.style.position = "absolute";

  jsEditText.elem = field;

  return field;
}

fan.fanvasWindow.WtkWindow.prototype.createNativeView = function(view, size, shell) {
  if (!size) {
    size = view.getPrefSize(shell.offsetWidth, shell.offsetHeight);
  }
  //console.log(size)

  if (view.m_host) {
    shell.removeChild(view.m_host.elem);
  }

  var nativeView = new fan.fanvasWindow.WtkView();
  nativeView.m_win = this;
  view.host$(nativeView);
  nativeView.view = view;
  nativeView.m_size = size;

  //create canvas
  var c = document.createElement("canvas");
  c.width  = size.m_w;
  c.height = size.m_h;

  nativeView.elem = c;
  nativeView.bindEvent(c);
  c.setAttribute('tabindex','0');
  c.focus();

  //create graphics
  var g = new fan.fanvasWindow.WtkGraphics();
  g.widget = view.m_host;
  view.m_host.graphics = g;
  fan.fanvasWindow.WtkWindow.graphics = g;

  //init graphics
  var cx = view.m_host.elem.getContext("2d");
  var rect = new fan.fanvasGraphics.Rect.make(0,0, size.m_w, size.m_h);
  g.init(cx, rect);
}

fan.fanvasWindow.WtkWindow.prototype.remove = function(view) {
  //remove at
  for (var i=0; i<this.list.length; ++i) {
    var v = this.list[i];
    if (v === view) {
      this.list.slice(i, 1);
      break;
    }
  }

  this.root.removeChild(view.m_host.elem);
}

fan.fanvasWindow.WtkWindow.prototype.mount = function(size, shell) {
  for (var i=0; i<this.list.length; ++i) {
    var view = this.list[i];

    if (view.willTextChange) {
      this.root.removeChild(view.m_host.elem);
      continue;
    }
    this.createNativeView(view, size, shell);

    shell.appendChild(view.m_host.elem);

    view.m_host.needRepaint = false;
    view.m_host.repaintNow();

    var event = fan.fanvasWindow.DisplayEvent.make(fan.fanvasWindow.DisplayEvent.m_opened);
    view.onDisplayEvent(event);
  }
}

fan.fanvasWindow.WtkWindow.prototype.show = function(size)
{
  // check for alt root
  var rootId = fan.sys.Env.cur().vars().get("fwt.window.root")
  if (rootId == null) this.root = document.body;
  else
  {
    this.root = document.getElementById(rootId);
    if (this.root == null) throw fan.sys.ArgErr.make("No root found");
  }

  // mount shell we use to attach widgets to
  var shell = document.createElement("div")
  with (shell.style)
  {
    position   = this.root === document.body ? "fixed" : "absolute";
    top        = "0";
    left       = "0";
    width      = "100%";
    height     = "100%";
    background = "#fff";
  }
  this.root.appendChild(shell);

  this.mount(size, shell);
  var self = this;
  fan.fanvasWindow.WtkWindow.instance = this;

  // attach resize listener
  window.addEventListener("resize", function() { self.mount(size, shell); }, false);

  //Repaint handling
  setInterval(function(){
    for (var i=0; i<self.list.length; ++i) {
      var view = self.list[i];
      if (view.willTextChange) continue;
      if (!view.m_host) continue;
      if (!view.m_host.needRepaint) continue;
      view.m_host.needRepaint = false;
      view.m_host.repaintNow();
    }
  }, 50);
}