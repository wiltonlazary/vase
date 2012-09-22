//
// Copyright (c) 2012, chunquedong
// Licensed under the Academic Free License version 3.0
//
// History:
//   2012-02-24  Jed Young  Creation
//

using fgfxMath
using fgfxOpenGl
using fgfxArray

@Js
class Object : Group
{
  Float[]? vertices
  internal GlBuffer? vertexPositionBuffer
  internal Int vertexPositionAttribute

  Program? program
  Material? material
}