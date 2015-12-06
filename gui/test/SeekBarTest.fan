//
// Copyright (c) 2011, chunquedong
// Licensed under the Academic Free License version 3.0
//
// History:
//   2015-12-5  Jed Young  Creation
//


@Js
class SeekBarTest : BaseTestWin
{
  protected override Widget build() {
    LinearLayout
    {
      it.id = "mainView"
      it.layoutParam.margin = Insets(dpToPixel(50f))
      SeekBar {
        it.id = "seekBar"
        it.curPos = 10f
      },
    }
  }
}