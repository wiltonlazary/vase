//
// Copyright (c) 2011, chunquedong
// Licensed under the Academic Free License version 3.0
//
// History:
//   2011-5-29  Jed Young  Creation
//

using array

**
** OpenGL graphical context
**
@Js
mixin GlContext
{
  abstract Void bindTexture(GlEnum target, GlTexture? texture)
  abstract Void bufferData(GlEnum target, ArrayBuffer data, GlEnum usage)
  abstract Int getProgramParameter(GlProgram program, GlEnum pname)
  abstract Int getShaderParameter(GlShader shader, GlEnum pname)
  abstract Str getShaderInfoLog(GlShader shader)
  abstract Void uniformMatrix4fv(GlUniformLocation location, Bool transpose, ArrayBuffer value)
  abstract Void texImage2DBuffer(GlEnum target, Int level, GlEnum internalformat, Int width, Int height, Int border, GlEnum format, GlEnum type, ArrayBuffer pixels)
  abstract Void texImage2D(GlEnum target, Int level, GlEnum internalformat, GlEnum format, GlEnum type, Image image)


//////////////////////////////////////////////////////////////////////////
// special
//////////////////////////////////////////////////////////////////////////

//  abstract null getContextAttributes()
//  abstract Bool isContextLost()
//  abstract Str[] getSupportedExtensions()
//  abstract null getExtension(Str name)
//  abstract Void bindTexture(GlEnum target, GlTexture texture)
//  abstract Void bufferData(GlEnum target, Int size, GlEnum usage)
//  abstract Void bufferData(GlEnum target, ArrayBuffer data, GlEnum usage)
//  abstract Void bufferData(GlEnum target, ArrayBuffer data, GlEnum usage)
//  abstract Void bufferSubData(GlEnum target, Int offset, ArrayBuffer data)
//  abstract Void bufferSubData(GlEnum target, Int offset, ArrayBuffer data)
//  abstract GlEnum checkFramebufferStatus(GlEnum target)
//  abstract GlActiveInfo getActiveAttrib(GlProgram program, Int index)
//  abstract GlActiveInfo getActiveUniform(GlProgram program, Int index)
//  abstract GlShader[] getAttachedShaders(GlProgram program)
//  abstract null getParameter(GlEnum pname)
//  abstract null getBufferParameter(GlEnum target, GlEnum pname)
//  abstract GlEnum getError()
//  abstract null getFramebufferAttachmentParameter(GlEnum target, GlEnum attachment, GlEnum pname)
//  abstract null getProgramParameter(GlProgram program, GlEnum pname)
//  abstract Str getProgramInfoLog(GlProgram program)
//  abstract null getRenderbufferParameter(GlEnum target, GlEnum pname)
//  abstract null getShaderParameter(GlShader shader, GlEnum pname)
//  abstract Str getShaderInfoLog(GlShader shader)
//  abstract Str getShaderSource(GlShader shader)
//  abstract null getTexParameter(GlEnum target, GlEnum pname)
//  abstract null getUniform(GlProgram program, GlUniformLocation location)
//  abstract null getVertexAttrib(Int index, GlEnum pname)
//  abstract Int getVertexAttribOffset(Int index, GlEnum pname)
//  abstract Void readPixels(Int x, Int y, Int width, Int height, GlEnum format, GlEnum type, ArrayBuffer pixels)
//  abstract Void texImage2D(GlEnum target, Int level, GlEnum internalformat, Int width, Int height, Int border, GlEnum format, GlEnum type, ArrayBuffer pixels)
//  abstract Void texImage2D(GlEnum target, Int level, GlEnum internalformat, GlEnum format, GlEnum type, null pixels)
//  abstract Void texImage2D(GlEnum target, Int level, GlEnum internalformat, GlEnum format, GlEnum type, Image image)
//  abstract Void texImage2D(GlEnum target, Int level, GlEnum internalformat, GlEnum format, GlEnum type, null canvas)
//  abstract Void texImage2D(GlEnum target, Int level, GlEnum internalformat, GlEnum format, GlEnum type, null video)
//  abstract Void texSubImage2D(GlEnum target, Int level, Int xoffset, Int yoffset, Int width, Int height, GlEnum format, GlEnum type, ArrayBuffer pixels)
//  abstract Void texSubImage2D(GlEnum target, Int level, Int xoffset, Int yoffset, GlEnum format, GlEnum type, null pixels)
//  abstract Void texSubImage2D(GlEnum target, Int level, Int xoffset, Int yoffset, GlEnum format, GlEnum type, Image image)
//  abstract Void texSubImage2D(GlEnum target, Int level, Int xoffset, Int yoffset, GlEnum format, GlEnum type, null canvas)
//  abstract Void texSubImage2D(GlEnum target, Int level, Int xoffset, Int yoffset, GlEnum format, GlEnum type, null video)
//  abstract Void uniform1fv(GlUniformLocation location, ArrayBuffer v)
//  abstract Void uniform1fv(GlUniformLocation location, Float[] v)
//  abstract Void uniform1iv(GlUniformLocation location, ArrayBuffer v)
//  abstract Void uniform1iv(GlUniformLocation location, Int[] v)
//  abstract Void uniform2fv(GlUniformLocation location, ArrayBuffer v)
//  abstract Void uniform2fv(GlUniformLocation location, Float[] v)
//  abstract Void uniform2iv(GlUniformLocation location, ArrayBuffer v)
//  abstract Void uniform2iv(GlUniformLocation location, Int[] v)
//  abstract Void uniform3fv(GlUniformLocation location, ArrayBuffer v)
//  abstract Void uniform3fv(GlUniformLocation location, Float[] v)
//  abstract Void uniform3iv(GlUniformLocation location, ArrayBuffer v)
//  abstract Void uniform3iv(GlUniformLocation location, Int[] v)
//  abstract Void uniform4fv(GlUniformLocation location, ArrayBuffer v)
//  abstract Void uniform4fv(GlUniformLocation location, Float[] v)
//  abstract Void uniform4iv(GlUniformLocation location, ArrayBuffer v)
//  abstract Void uniform4iv(GlUniformLocation location, Int[] v)
//  abstract Void uniformMatrix2fv(GlUniformLocation location, Bool transpose, ArrayBuffer value)
//  abstract Void uniformMatrix2fv(GlUniformLocation location, Bool transpose, Float[] value)
//  abstract Void uniformMatrix3fv(GlUniformLocation location, Bool transpose, ArrayBuffer value)
//  abstract Void uniformMatrix3fv(GlUniformLocation location, Bool transpose, Float[] value)
//  abstract Void uniformMatrix4fv(GlUniformLocation location, Bool transpose, ArrayBuffer value)
//  abstract Void uniformMatrix4fv(GlUniformLocation location, Bool transpose, Float[] value)
//  abstract Void vertexAttrib1fv(Int indx, ArrayBuffer values)
//  abstract Void vertexAttrib1fv(Int indx, Float[] values)
//  abstract Void vertexAttrib2fv(Int indx, ArrayBuffer values)
//  abstract Void vertexAttrib2fv(Int indx, Float[] values)
//  abstract Void vertexAttrib3fv(Int indx, ArrayBuffer values)
//  abstract Void vertexAttrib3fv(Int indx, Float[] values)
//  abstract Void vertexAttrib4fv(Int indx, ArrayBuffer values)
//  abstract Void vertexAttrib4fv(Int indx, Float[] values)

//////////////////////////////////////////////////////////////////////////
// Gen
//////////////////////////////////////////////////////////////////////////

  abstract Void activeTexture(GlEnum texture)
  abstract Void attachShader(GlProgram program, GlShader shader)
  abstract Void bindAttribLocation(GlProgram program, Int index, Str name)
  abstract Void bindBuffer(GlEnum target, GlBuffer buffer)
  abstract Void bindFramebuffer(GlEnum target, GlFramebuffer framebuffer)
  abstract Void bindRenderbuffer(GlEnum target, GlRenderbuffer renderbuffer)
  abstract Void blendColor(Float red, Float green, Float blue, Float alpha)
  abstract Void blendEquation(GlEnum mode)
  abstract Void blendEquationSeparate(GlEnum modeRGB, GlEnum modeAlpha)
  abstract Void blendFunc(GlEnum sfactor, GlEnum dfactor)
  abstract Void blendFuncSeparate(GlEnum srcRGB, GlEnum dstRGB, GlEnum srcAlpha, GlEnum dstAlpha)
  abstract Void clear(GlEnum mask)
  abstract Void clearColor(Float red, Float green, Float blue, Float alpha)
  abstract Void clearDepth(Float depth)
  abstract Void clearStencil(Int s)
  abstract Void colorMask(Bool red, Bool green, Bool blue, Bool alpha)
  abstract Void compileShader(GlShader shader)
  abstract Void copyTexImage2D(GlEnum target, Int level, GlEnum internalformat, Int x, Int y, Int width, Int height, Int border)
  abstract Void copyTexSubImage2D(GlEnum target, Int level, Int xoffset, Int yoffset, Int x, Int y, Int width, Int height)
  abstract GlBuffer createBuffer()
  abstract GlFramebuffer createFramebuffer()
  abstract GlProgram createProgram()
  abstract GlRenderbuffer createRenderbuffer()
  abstract GlShader createShader(GlEnum type)
  abstract GlTexture createTexture()
  abstract Void cullFace(GlEnum mode)
  abstract Void deleteBuffer(GlBuffer buffer)
  abstract Void deleteFramebuffer(GlFramebuffer framebuffer)
  abstract Void deleteProgram(GlProgram program)
  abstract Void deleteRenderbuffer(GlRenderbuffer renderbuffer)
  abstract Void deleteShader(GlShader shader)
  abstract Void deleteTexture(GlTexture texture)
  abstract Void depthFunc(GlEnum func)
  abstract Void depthMask(Bool flag)
  abstract Void depthRange(Float zNear, Float zFar)
  abstract Void detachShader(GlProgram program, GlShader shader)
  abstract Void disable(GlEnum cap)
  abstract Void disableVertexAttribArray(Int index)
  abstract Void drawArrays(GlEnum mode, Int first, Int count)
  abstract Void drawElements(GlEnum mode, Int count, GlEnum type, Int offset)
  abstract Void enable(GlEnum cap)
  abstract Void enableVertexAttribArray(Int index)
  abstract Void finish()
  abstract Void flush()
  abstract Void framebufferRenderbuffer(GlEnum target, GlEnum attachment, GlEnum renderbuffertarget, GlRenderbuffer renderbuffer)
  abstract Void framebufferTexture2D(GlEnum target, GlEnum attachment, GlEnum textarget, GlTexture texture, Int level)
  abstract Void frontFace(GlEnum mode)
  abstract Void generateMipmap(GlEnum target)
  abstract Int getAttribLocation(GlProgram program, Str name)
  abstract GlUniformLocation getUniformLocation(GlProgram program, Str name)
  abstract Void hint(GlEnum target, GlEnum mode)
  abstract Bool isBuffer(GlBuffer buffer)
  abstract Bool isEnabled(GlEnum cap)
  abstract Bool isFramebuffer(GlFramebuffer framebuffer)
  abstract Bool isProgram(GlProgram program)
  abstract Bool isRenderbuffer(GlRenderbuffer renderbuffer)
  abstract Bool isShader(GlShader shader)
  abstract Bool isTexture(GlTexture texture)
  abstract Void lineWidth(Float width)
  abstract Void linkProgram(GlProgram program)
  abstract Void pixelStorei(GlEnum pname, Int param)
  abstract Void polygonOffset(Float factor, Float units)
  abstract Void renderbufferStorage(GlEnum target, GlEnum internalformat, Int width, Int height)
  abstract Void sampleCoverage(Float value, Bool invert)
  abstract Void scissor(Int x, Int y, Int width, Int height)
  abstract Void shaderSource(GlShader shader, Str source)
  abstract Void stencilFunc(GlEnum func, Int ref, Int mask)
  abstract Void stencilFuncSeparate(GlEnum face, GlEnum func, Int ref, Int mask)
  abstract Void stencilMask(Int mask)
  abstract Void stencilMaskSeparate(GlEnum face, Int mask)
  abstract Void stencilOp(GlEnum fail, GlEnum zfail, GlEnum zpass)
  abstract Void stencilOpSeparate(GlEnum face, GlEnum fail, GlEnum zfail, GlEnum zpass)
  abstract Void texParameterf(GlEnum target, GlEnum pname, Float param)
  abstract Void texParameteri(GlEnum target, GlEnum pname, Int param)
  abstract Void uniform1f(GlUniformLocation location, Float x)
  abstract Void uniform1i(GlUniformLocation location, Int x)
  abstract Void uniform2f(GlUniformLocation location, Float x, Float y)
  abstract Void uniform2i(GlUniformLocation location, Int x, Int y)
  abstract Void uniform3f(GlUniformLocation location, Float x, Float y, Float z)
  abstract Void uniform3i(GlUniformLocation location, Int x, Int y, Int z)
  abstract Void uniform4f(GlUniformLocation location, Float x, Float y, Float z, Float w)
  abstract Void uniform4i(GlUniformLocation location, Int x, Int y, Int z, Int w)
  abstract Void useProgram(GlProgram program)
  abstract Void validateProgram(GlProgram program)
  abstract Void vertexAttrib1f(Int indx, Float x)
  abstract Void vertexAttrib2f(Int indx, Float x, Float y)
  abstract Void vertexAttrib3f(Int indx, Float x, Float y, Float z)
  abstract Void vertexAttrib4f(Int indx, Float x, Float y, Float z, Float w)
  abstract Void vertexAttribPointer(Int indx, Int size, GlEnum type, Bool normalized, Int stride, Int offset)
  abstract Void viewport(Int x, Int y, Int width, Int height)
}