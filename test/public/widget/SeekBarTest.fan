//
// Copyright (c) 2011, chunquedong
// Licensed under the Academic Free License version 3.0
//
// History:
//   2015-12-5  Jed Young  Creation
//

using vaseGui

@Js
class SeekBarTest : BaseTestWin
{
  protected override Widget build() {
    VBox
    {
      it.id = "mainView"
      it.margin = Insets(100)
      SliderBar {
        it.id = "seekBar"
        it.setCurPos(10f, false)
      },
    }
  }
}