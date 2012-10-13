//
// Copyright (c) 2011, chunquedong
// Licensed under the Academic Free License version 3.0
//
// History:
//   2011-7-4  Jed Young  Creation
//

package fan.fgfxWtk;

import fan.concurrent.Actor;
import fan.fgfx2d.Graphics;
import fan.sys.*;

public class FwtToolkitEnvPeer
{
  public static FwtToolkitEnvPeer make(ToolkitEnv self)
  {
    FwtToolkitEnvPeer peer = new FwtToolkitEnvPeer();
    return peer;
  }

  public static void initGfxEnv()
  {
    Actor.locals().set("fgfx2d.env", SwtGfxEnv.instance);
  }

  public static Graphics toGraphics(fan.gfx.Graphics fg)
  {
    fan.fwt.FwtGraphics fwt = (fan.fwt.FwtGraphics)fg;
    return new SwtGraphics(fwt.gc());
  }
}