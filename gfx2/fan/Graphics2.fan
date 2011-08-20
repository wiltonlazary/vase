//
// Copyright (c) 2011, chunquedong
// Licensed under the Academic Free License version 3.0
//
// History:
//   2011-08-11  Jed Young  Creation
//

using gfx
using fan3dMath
using array

**
** an extension of gfx::Graphics
**
@Js
mixin Graphics2 : Graphics
{
  **
  ** Draw a the image string with its top left corner at x,y.
  **
  abstract This drawImage2(Image2 image, Int x, Int y)

  **
  ** Copy a rectangular region of the image to the graphics
  ** device.  If the source and destination don't have the
  ** same size, then the copy is resized.
  **
  abstract This copyImage2(Image2 image, Rect src, Rect dest)

  **
  ** Draws the path described by the parameter.
  **
  abstract This drawPath(Path path)

  **
  ** Fills the path described by the parameter.
  **
  abstract This fillPath(Path path)

  **
  ** Draw a polyline with the current pen and brush.
  **
  abstract This drawPolyline2(Array p)

  **
  ** Fill a polygon with the current brush.
  **
  abstract This fillPolygon2(Array p)

  **
  ** the transform that is currently being used
  **
  abstract This setTransform(Transform2D trans)

  **
  ** Sets the area of the receiver which can be changed by drawing operations to the path specified by the argument.
  **
  abstract This setClipping(Path path)
}