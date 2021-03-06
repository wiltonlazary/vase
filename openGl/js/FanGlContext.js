//
// Copyright (c) 2011, chunquedong
// Licensed under the Academic Free License version 3.0
//
// History:
//   2011-5-29  Jed Young  Creation
//


fan.vaseOpenGl.FanGlContext = fan.sys.Obj.$extend(fan.sys.Obj);
fan.vaseOpenGl.FanGlContext.prototype.$ctor = function(self) {}
fan.vaseOpenGl.FanGlContext.prototype.gl = null;

fan.vaseOpenGl.FanGlContext.prototype.$typeof = function() { return fan.vaseOpenGl.FanGlContext.$type; }

//////////////////////////////////////////////////////////////////////////
// special
//////////////////////////////////////////////////////////////////////////

fan.vaseOpenGl.FanGlContext.prototype.getContextAttributes = function(){ return this.gl.getContextAttributes(); }
fan.vaseOpenGl.FanGlContext.prototype.isContextLost = function(){ return this.gl.isContextLost(); }
fan.vaseOpenGl.FanGlContext.prototype.getSupportedExtensions = function(){ return this.gl.getSupportedExtensions(); }
fan.vaseOpenGl.FanGlContext.prototype.getExtension = function(name){ return this.gl.getExtension(name); }
//fan.vaseOpenGl.FanGlContext.prototype.bindTexture = function(target, texture){ this.gl.bindTexture(target.m_val, texture.peer.getValue()); }
fan.vaseOpenGl.FanGlContext.prototype.bufferDataEmpty = function(target, size, usage){ this.gl.bufferData(target.m_val, size, usage.m_val); }
fan.vaseOpenGl.FanGlContext.prototype.bufferData = function(target, data, usage){ this.gl.bufferData(target.m_val, data.peer.getValue(), usage.m_val); }
//fan.vaseOpenGl.FanGlContext.prototype.bufferData = function(target, data, usage){ this.gl.bufferData(target.m_val, data.peer.getValue(), usage.m_val); }
fan.vaseOpenGl.FanGlContext.prototype.bufferSubData = function(target, offset, data){ this.gl.bufferSubData(target.m_val, offset, data.peer.getValue()); }
//fan.vaseOpenGl.FanGlContext.prototype.bufferSubData = function(target, offset, data){ this.gl.bufferSubData(target.m_val, offset, data.peer.getValue()); }
fan.vaseOpenGl.FanGlContext.prototype.checkFramebufferStatus = function(target){ return this.gl.checkFramebufferStatus(target.m_val); }
fan.vaseOpenGl.FanGlContext.prototype.getActiveAttrib = function(program, index){    var i = this.gl.getActiveAttrib(program.peer.getValue(), index);    var p = fan.vaseOpenGl.GlActiveInfo.make();    p.peer.setValue(i);    return p;  }
fan.vaseOpenGl.FanGlContext.prototype.getActiveUniform = function(program, index){    var i = this.gl.getActiveUniform(program.peer.getValue(), index);    var p = fan.vaseOpenGl.GlActiveInfo.make();    p.peer.setValue(i);    return p;  }
fan.vaseOpenGl.FanGlContext.prototype.getAttachedShaders = function(program){ return this.gl.getAttachedShaders(program.peer.getValue()); }
fan.vaseOpenGl.FanGlContext.prototype.getParameter = function(pname){ return this.gl.getParameter(pname.m_val); }
fan.vaseOpenGl.FanGlContext.prototype.getBufferParameter = function(target, pname){ return this.gl.getBufferParameter(target.m_val, pname.m_val); }
fan.vaseOpenGl.FanGlContext.prototype.getError = function(){ return this.gl.getError(); }
fan.vaseOpenGl.FanGlContext.prototype.getFramebufferAttachmentParameter = function(target, attachment, pname){ return this.gl.getFramebufferAttachmentParameter(target.m_val, attachment.m_val, pname.m_val); }
fan.vaseOpenGl.FanGlContext.prototype.getProgramParameter = function(program, pname){ return this.gl.getProgramParameter(program.peer.getValue(), pname.m_val); }
fan.vaseOpenGl.FanGlContext.prototype.getProgramInfoLog = function(program){ return this.gl.getProgramInfoLog(program.peer.getValue()); }
fan.vaseOpenGl.FanGlContext.prototype.getRenderbufferParameter = function(target, pname){ return this.gl.getRenderbufferParameter(target.m_val, pname.m_val); }
fan.vaseOpenGl.FanGlContext.prototype.getShaderParameter = function(shader, pname){ return this.gl.getShaderParameter(shader.peer.getValue(), pname.m_val); }
fan.vaseOpenGl.FanGlContext.prototype.getShaderInfoLog = function(shader){ return this.gl.getShaderInfoLog(shader.peer.getValue()); }
fan.vaseOpenGl.FanGlContext.prototype.getShaderSource = function(shader){ return this.gl.getShaderSource(shader.peer.getValue()); }
fan.vaseOpenGl.FanGlContext.prototype.getTexParameter = function(target, pname){ return this.gl.getTexParameter(target.m_val, pname.m_val); }
fan.vaseOpenGl.FanGlContext.prototype.getUniform = function(program, location){ return this.gl.getUniform(program.peer.getValue(), location.peer.getValue()); }
fan.vaseOpenGl.FanGlContext.prototype.getVertexAttrib = function(index, pname){ return this.gl.getVertexAttrib(index, pname.m_val); }
fan.vaseOpenGl.FanGlContext.prototype.getVertexAttribOffset = function(index, pname){ return this.gl.getVertexAttribOffset(index, pname.m_val); }
fan.vaseOpenGl.FanGlContext.prototype.readPixels = function(x, y, width, height, format, type, pixels){ this.gl.readPixels(x, y, width, height, format.m_val, type.m_val, pixels.peer.getValue()); }

fan.vaseOpenGl.FanGlContext.prototype.texImage2DBuffer = function(target, level, internalformat, width, height, border, format, type, pixels){ this.gl.texImage2D(target.m_val, level, internalformat.m_val, width, height, border, format.m_val, type.m_val, pixels.peer.getValue()); }
fan.vaseOpenGl.FanGlContext.prototype.texImage2DPixels = function(target, level, internalformat, format, type, pixels){ this.gl.texImage2D(target.m_val, level, internalformat.m_val, format.m_val, type.m_val, pixels); }
fan.vaseOpenGl.FanGlContext.prototype.texImage2D = function(target, level, internalformat, format, type, image){ this.gl.texImage2D(target.m_val, level, internalformat.m_val, format.m_val, type.m_val, image.peer.image); }
fan.vaseOpenGl.FanGlContext.prototype.texImage2DCanvas = function(target, level, internalformat, format, type, canvas){ this.gl.texImage2D(target.m_val, level, internalformat.m_val, format.m_val, type.m_val, canvas); }
fan.vaseOpenGl.FanGlContext.prototype.texImage2DVideo = function(target, level, internalformat, format, type, video){ this.gl.texImage2D(target.m_val, level, internalformat.m_val, format.m_val, type.m_val, video); }
fan.vaseOpenGl.FanGlContext.prototype.texSubImage2DBuffer = function(target, level, xoffset, yoffset, width, height, format, type, pixels){ this.gl.texSubImage2D(target.m_val, level, xoffset, yoffset, width, height, format.m_val, type.m_val, pixels.peer.getValue()); }
fan.vaseOpenGl.FanGlContext.prototype.texSubImage2DPixels = function(target, level, xoffset, yoffset, format, type, pixels){ this.gl.texSubImage2D(target.m_val, level, xoffset, yoffset, format.m_val, type.m_val, pixels); }
fan.vaseOpenGl.FanGlContext.prototype.texSubImage2D = function(target, level, xoffset, yoffset, format, type, image){ this.gl.texSubImage2D(target.m_val, level, xoffset, yoffset, format.m_val, type.m_val, image.peer.image); }
fan.vaseOpenGl.FanGlContext.prototype.texSubImage2DCanvas = function(target, level, xoffset, yoffset, format, type, canvas){ this.gl.texSubImage2D(target.m_val, level, xoffset, yoffset, format.m_val, type.m_val, canvas); }
fan.vaseOpenGl.FanGlContext.prototype.texSubImage2DVideo = function(target, level, xoffset, yoffset, format, type, video){ this.gl.texSubImage2D(target.m_val, level, xoffset, yoffset, format.m_val, type.m_val, video); }

fan.vaseOpenGl.FanGlContext.prototype.uniform1fv = function(location, v){ this.gl.uniform1fv(location.peer.getValue(), v.peer.getValue()); }
//fan.vaseOpenGl.FanGlContext.prototype.uniform1fv = function(location, v){ this.gl.uniform1fv(location.peer.getValue(), v); }
fan.vaseOpenGl.FanGlContext.prototype.uniform1iv = function(location, v){ this.gl.uniform1iv(location.peer.getValue(), v.peer.getValue()); }
//fan.vaseOpenGl.FanGlContext.prototype.uniform1iv = function(location, v){ this.gl.uniform1iv(location.peer.getValue(), v); }
fan.vaseOpenGl.FanGlContext.prototype.uniform2fv = function(location, v){ this.gl.uniform2fv(location.peer.getValue(), v.peer.getValue()); }
//fan.vaseOpenGl.FanGlContext.prototype.uniform2fv = function(location, v){ this.gl.uniform2fv(location.peer.getValue(), v); }
fan.vaseOpenGl.FanGlContext.prototype.uniform2iv = function(location, v){ this.gl.uniform2iv(location.peer.getValue(), v.peer.getValue()); }
//fan.vaseOpenGl.FanGlContext.prototype.uniform2iv = function(location, v){ this.gl.uniform2iv(location.peer.getValue(), v); }
fan.vaseOpenGl.FanGlContext.prototype.uniform3fv = function(location, v){ this.gl.uniform3fv(location.peer.getValue(), v.peer.getValue()); }
//fan.vaseOpenGl.FanGlContext.prototype.uniform3fv = function(location, v){ this.gl.uniform3fv(location.peer.getValue(), v); }
fan.vaseOpenGl.FanGlContext.prototype.uniform3iv = function(location, v){ this.gl.uniform3iv(location.peer.getValue(), v.peer.getValue()); }
//fan.vaseOpenGl.FanGlContext.prototype.uniform3iv = function(location, v){ this.gl.uniform3iv(location.peer.getValue(), v); }
fan.vaseOpenGl.FanGlContext.prototype.uniform4fv = function(location, v){ this.gl.uniform4fv(location.peer.getValue(), v.peer.getValue()); }
//fan.vaseOpenGl.FanGlContext.prototype.uniform4fv = function(location, v){ this.gl.uniform4fv(location.peer.getValue(), v); }
fan.vaseOpenGl.FanGlContext.prototype.uniform4iv = function(location, v){ this.gl.uniform4iv(location.peer.getValue(), v.peer.getValue()); }
//fan.vaseOpenGl.FanGlContext.prototype.uniform4iv = function(location, v){ this.gl.uniform4iv(location.peer.getValue(), v); }
fan.vaseOpenGl.FanGlContext.prototype.uniformMatrix2fv = function(location, transpose, value){ this.gl.uniformMatrix2fv(location.peer.getValue(), transpose, value.peer.getValue()); }
//fan.vaseOpenGl.FanGlContext.prototype.uniformMatrix2fv = function(location, transpose, value){ this.gl.uniformMatrix2fv(location.peer.getValue(), transpose, value); }
fan.vaseOpenGl.FanGlContext.prototype.uniformMatrix3fv = function(location, transpose, value){ this.gl.uniformMatrix3fv(location.peer.getValue(), transpose, value.peer.getValue()); }
//fan.vaseOpenGl.FanGlContext.prototype.uniformMatrix3fv = function(location, transpose, value){ this.gl.uniformMatrix3fv(location.peer.getValue(), transpose, value); }
fan.vaseOpenGl.FanGlContext.prototype.uniformMatrix4fv = function(location, transpose, value){ this.gl.uniformMatrix4fv(location.peer.getValue(), transpose, value.peer.getValue()); }
//fan.vaseOpenGl.FanGlContext.prototype.uniformMatrix4fv = function(location, transpose, value){ this.gl.uniformMatrix4fv(location.peer.getValue(), transpose, value); }
fan.vaseOpenGl.FanGlContext.prototype.vertexAttrib1fv = function(indx, values){ this.gl.vertexAttrib1fv(indx, values.peer.getValue()); }
//fan.vaseOpenGl.FanGlContext.prototype.vertexAttrib1fv = function(indx, values){ this.gl.vertexAttrib1fv(indx, values); }
fan.vaseOpenGl.FanGlContext.prototype.vertexAttrib2fv = function(indx, values){ this.gl.vertexAttrib2fv(indx, values.peer.getValue()); }
//fan.vaseOpenGl.FanGlContext.prototype.vertexAttrib2fv = function(indx, values){ this.gl.vertexAttrib2fv(indx, values); }
fan.vaseOpenGl.FanGlContext.prototype.vertexAttrib3fv = function(indx, values){ this.gl.vertexAttrib3fv(indx, values.peer.getValue()); }
//fan.vaseOpenGl.FanGlContext.prototype.vertexAttrib3fv = function(indx, values){ this.gl.vertexAttrib3fv(indx, values); }
fan.vaseOpenGl.FanGlContext.prototype.vertexAttrib4fv = function(indx, values){ this.gl.vertexAttrib4fv(indx, values.peer.getValue()); }
//fan.vaseOpenGl.FanGlContext.prototype.vertexAttrib4fv = function(indx, values){ this.gl.vertexAttrib4fv(indx, values); }

//////////////////////////////////////////////////////////////////////////
// manual
//////////////////////////////////////////////////////////////////////////

fan.vaseOpenGl.FanGlContext.prototype.bindTexture = function(target, texture)
{
  if (texture)
    this.gl.bindTexture(target.m_val, texture.peer.getValue());
  else
    this.gl.bindTexture(target.m_val, null);
}

//////////////////////////////////////////////////////////////////////////
// Gen
//////////////////////////////////////////////////////////////////////////

fan.vaseOpenGl.FanGlContext.prototype.activeTexture = function(texture){ this.gl.activeTexture(texture.m_val); }
fan.vaseOpenGl.FanGlContext.prototype.attachShader = function(program, shader){ this.gl.attachShader(program.peer.getValue(), shader.peer.getValue()); }
fan.vaseOpenGl.FanGlContext.prototype.bindAttribLocation = function(program, index, name){ this.gl.bindAttribLocation(program.peer.getValue(), index, name); }
fan.vaseOpenGl.FanGlContext.prototype.bindBuffer = function(target, buffer){ this.gl.bindBuffer(target.m_val, buffer.peer.getValue()); }
fan.vaseOpenGl.FanGlContext.prototype.bindFramebuffer = function(target, framebuffer){ this.gl.bindFramebuffer(target.m_val, framebuffer.peer.getValue()); }
fan.vaseOpenGl.FanGlContext.prototype.bindRenderbuffer = function(target, renderbuffer){ this.gl.bindRenderbuffer(target.m_val, renderbuffer.peer.getValue()); }
fan.vaseOpenGl.FanGlContext.prototype.blendColor = function(red, green, blue, alpha){ this.gl.blendColor(red, green, blue, alpha); }
fan.vaseOpenGl.FanGlContext.prototype.blendEquation = function(mode){ this.gl.blendEquation(mode.m_val); }
fan.vaseOpenGl.FanGlContext.prototype.blendEquationSeparate = function(modeRGB, modeAlpha){ this.gl.blendEquationSeparate(modeRGB.m_val, modeAlpha.m_val); }
fan.vaseOpenGl.FanGlContext.prototype.blendFunc = function(sfactor, dfactor){ this.gl.blendFunc(sfactor.m_val, dfactor.m_val); }
fan.vaseOpenGl.FanGlContext.prototype.blendFuncSeparate = function(srcRGB, dstRGB, srcAlpha, dstAlpha){ this.gl.blendFuncSeparate(srcRGB.m_val, dstRGB.m_val, srcAlpha.m_val, dstAlpha.m_val); }
fan.vaseOpenGl.FanGlContext.prototype.clear = function(mask){ this.gl.clear(mask.m_val); }
fan.vaseOpenGl.FanGlContext.prototype.clearColor = function(red, green, blue, alpha){ this.gl.clearColor(red, green, blue, alpha); }
fan.vaseOpenGl.FanGlContext.prototype.clearDepth = function(depth){ this.gl.clearDepth(depth); }
fan.vaseOpenGl.FanGlContext.prototype.clearStencil = function(s){ this.gl.clearStencil(s); }
fan.vaseOpenGl.FanGlContext.prototype.colorMask = function(red, green, blue, alpha){ this.gl.colorMask(red, green, blue, alpha); }
fan.vaseOpenGl.FanGlContext.prototype.compileShader = function(shader){ this.gl.compileShader(shader.peer.getValue()); }
fan.vaseOpenGl.FanGlContext.prototype.copyTexImage2D = function(target, level, internalformat, x, y, width, height, border){ this.gl.copyTexImage2D(target.m_val, level, internalformat.m_val, x, y, width, height, border); }
fan.vaseOpenGl.FanGlContext.prototype.copyTexSubImage2D = function(target, level, xoffset, yoffset, x, y, width, height){ this.gl.copyTexSubImage2D(target.m_val, level, xoffset, yoffset, x, y, width, height); }
fan.vaseOpenGl.FanGlContext.prototype.createBuffer = function(){    var i = this.gl.createBuffer();    var p = fan.vaseOpenGl.GlBuffer.make();    p.peer.setValue(i);    return p;  }
fan.vaseOpenGl.FanGlContext.prototype.createFramebuffer = function(){    var i = this.gl.createFramebuffer();    var p = fan.vaseOpenGl.GlFramebuffer.make();    p.peer.setValue(i);    return p;  }
fan.vaseOpenGl.FanGlContext.prototype.createProgram = function(){    var i = this.gl.createProgram();    var p = fan.vaseOpenGl.GlProgram.make();    p.peer.setValue(i);    return p;  }
fan.vaseOpenGl.FanGlContext.prototype.createRenderbuffer = function(){    var i = this.gl.createRenderbuffer();    var p = fan.vaseOpenGl.GlRenderbuffer.make();    p.peer.setValue(i);    return p;  }
fan.vaseOpenGl.FanGlContext.prototype.createShader = function(type){    var i = this.gl.createShader(type.m_val);    var p = fan.vaseOpenGl.GlShader.make();    p.peer.setValue(i);    return p;  }
fan.vaseOpenGl.FanGlContext.prototype.createTexture = function(){    var i = this.gl.createTexture();    var p = fan.vaseOpenGl.GlTexture.make();    p.peer.setValue(i);    return p;  }
fan.vaseOpenGl.FanGlContext.prototype.cullFace = function(mode){ this.gl.cullFace(mode.m_val); }
fan.vaseOpenGl.FanGlContext.prototype.deleteBuffer = function(buffer){ this.gl.deleteBuffer(buffer.peer.getValue()); }
fan.vaseOpenGl.FanGlContext.prototype.deleteFramebuffer = function(framebuffer){ this.gl.deleteFramebuffer(framebuffer.peer.getValue()); }
fan.vaseOpenGl.FanGlContext.prototype.deleteProgram = function(program){ this.gl.deleteProgram(program.peer.getValue()); }
fan.vaseOpenGl.FanGlContext.prototype.deleteRenderbuffer = function(renderbuffer){ this.gl.deleteRenderbuffer(renderbuffer.peer.getValue()); }
fan.vaseOpenGl.FanGlContext.prototype.deleteShader = function(shader){ this.gl.deleteShader(shader.peer.getValue()); }
fan.vaseOpenGl.FanGlContext.prototype.deleteTexture = function(texture){ this.gl.deleteTexture(texture.peer.getValue()); }
fan.vaseOpenGl.FanGlContext.prototype.depthFunc = function(func){ this.gl.depthFunc(func.m_val); }
fan.vaseOpenGl.FanGlContext.prototype.depthMask = function(flag){ this.gl.depthMask(flag); }
fan.vaseOpenGl.FanGlContext.prototype.depthRange = function(zNear, zFar){ this.gl.depthRange(zNear, zFar); }
fan.vaseOpenGl.FanGlContext.prototype.detachShader = function(program, shader){ this.gl.detachShader(program.peer.getValue(), shader.peer.getValue()); }
fan.vaseOpenGl.FanGlContext.prototype.disable = function(cap){ this.gl.disable(cap.m_val); }
fan.vaseOpenGl.FanGlContext.prototype.disableVertexAttribArray = function(index){ this.gl.disableVertexAttribArray(index); }
fan.vaseOpenGl.FanGlContext.prototype.drawArrays = function(mode, first, count){ this.gl.drawArrays(mode.m_val, first, count); }
fan.vaseOpenGl.FanGlContext.prototype.drawElements = function(mode, count, type, offset){ this.gl.drawElements(mode.m_val, count, type.m_val, offset); }
fan.vaseOpenGl.FanGlContext.prototype.enable = function(cap){ this.gl.enable(cap.m_val); }
fan.vaseOpenGl.FanGlContext.prototype.enableVertexAttribArray = function(index){ this.gl.enableVertexAttribArray(index); }
fan.vaseOpenGl.FanGlContext.prototype.finish = function(){ this.gl.finish(); }
fan.vaseOpenGl.FanGlContext.prototype.flush = function(){ this.gl.flush(); }
fan.vaseOpenGl.FanGlContext.prototype.framebufferRenderbuffer = function(target, attachment, renderbuffertarget, renderbuffer){ this.gl.framebufferRenderbuffer(target.m_val, attachment.m_val, renderbuffertarget.m_val, renderbuffer.peer.getValue()); }
fan.vaseOpenGl.FanGlContext.prototype.framebufferTexture2D = function(target, attachment, textarget, texture, level){ this.gl.framebufferTexture2D(target.m_val, attachment.m_val, textarget.m_val, texture.peer.getValue(), level); }
fan.vaseOpenGl.FanGlContext.prototype.frontFace = function(mode){ this.gl.frontFace(mode.m_val); }
fan.vaseOpenGl.FanGlContext.prototype.generateMipmap = function(target){ this.gl.generateMipmap(target.m_val); }
fan.vaseOpenGl.FanGlContext.prototype.getAttribLocation = function(program, name){ return this.gl.getAttribLocation(program.peer.getValue(), name); }
fan.vaseOpenGl.FanGlContext.prototype.getUniformLocation = function(program, name){    var i = this.gl.getUniformLocation(program.peer.getValue(), name);    var p = fan.vaseOpenGl.GlUniformLocation.make();    p.peer.setValue(i);    return p;  }
fan.vaseOpenGl.FanGlContext.prototype.hint = function(target, mode){ this.gl.hint(target.m_val, mode.m_val); }
fan.vaseOpenGl.FanGlContext.prototype.isBuffer = function(buffer){ return this.gl.isBuffer(buffer.peer.getValue()); }
fan.vaseOpenGl.FanGlContext.prototype.isEnabled = function(cap){ return this.gl.isEnabled(cap.m_val); }
fan.vaseOpenGl.FanGlContext.prototype.isFramebuffer = function(framebuffer){ return this.gl.isFramebuffer(framebuffer.peer.getValue()); }
fan.vaseOpenGl.FanGlContext.prototype.isProgram = function(program){ return this.gl.isProgram(program.peer.getValue()); }
fan.vaseOpenGl.FanGlContext.prototype.isRenderbuffer = function(renderbuffer){ return this.gl.isRenderbuffer(renderbuffer.peer.getValue()); }
fan.vaseOpenGl.FanGlContext.prototype.isShader = function(shader){ return this.gl.isShader(shader.peer.getValue()); }
fan.vaseOpenGl.FanGlContext.prototype.isTexture = function(texture){ return this.gl.isTexture(texture.peer.getValue()); }
fan.vaseOpenGl.FanGlContext.prototype.lineWidth = function(width){ this.gl.lineWidth(width); }
fan.vaseOpenGl.FanGlContext.prototype.linkProgram = function(program){ this.gl.linkProgram(program.peer.getValue()); }
fan.vaseOpenGl.FanGlContext.prototype.pixelStorei = function(pname, param){ this.gl.pixelStorei(pname.m_val, param); }
fan.vaseOpenGl.FanGlContext.prototype.polygonOffset = function(factor, units){ this.gl.polygonOffset(factor, units); }
fan.vaseOpenGl.FanGlContext.prototype.renderbufferStorage = function(target, internalformat, width, height){ this.gl.renderbufferStorage(target.m_val, internalformat.m_val, width, height); }
fan.vaseOpenGl.FanGlContext.prototype.sampleCoverage = function(value, invert){ this.gl.sampleCoverage(value, invert); }
fan.vaseOpenGl.FanGlContext.prototype.scissor = function(x, y, width, height){ this.gl.scissor(x, y, width, height); }
fan.vaseOpenGl.FanGlContext.prototype.shaderSource = function(shader, source){ this.gl.shaderSource(shader.peer.getValue(), source); }
fan.vaseOpenGl.FanGlContext.prototype.stencilFunc = function(func, ref, mask){ this.gl.stencilFunc(func.m_val, ref, mask); }
fan.vaseOpenGl.FanGlContext.prototype.stencilFuncSeparate = function(face, func, ref, mask){ this.gl.stencilFuncSeparate(face.m_val, func.m_val, ref, mask); }
fan.vaseOpenGl.FanGlContext.prototype.stencilMask = function(mask){ this.gl.stencilMask(mask); }
fan.vaseOpenGl.FanGlContext.prototype.stencilMaskSeparate = function(face, mask){ this.gl.stencilMaskSeparate(face.m_val, mask); }
fan.vaseOpenGl.FanGlContext.prototype.stencilOp = function(fail, zfail, zpass){ this.gl.stencilOp(fail.m_val, zfail.m_val, zpass.m_val); }
fan.vaseOpenGl.FanGlContext.prototype.stencilOpSeparate = function(face, fail, zfail, zpass){ this.gl.stencilOpSeparate(face.m_val, fail.m_val, zfail.m_val, zpass.m_val); }
fan.vaseOpenGl.FanGlContext.prototype.texParameterf = function(target, pname, param){ this.gl.texParameterf(target.m_val, pname.m_val, param); }
fan.vaseOpenGl.FanGlContext.prototype.texParameteri = function(target, pname, param){ this.gl.texParameteri(target.m_val, pname.m_val, param); }
fan.vaseOpenGl.FanGlContext.prototype.uniform1f = function(location, x){ this.gl.uniform1f(location.peer.getValue(), x); }
fan.vaseOpenGl.FanGlContext.prototype.uniform1i = function(location, x){ this.gl.uniform1i(location.peer.getValue(), x); }
fan.vaseOpenGl.FanGlContext.prototype.uniform2f = function(location, x, y){ this.gl.uniform2f(location.peer.getValue(), x, y); }
fan.vaseOpenGl.FanGlContext.prototype.uniform2i = function(location, x, y){ this.gl.uniform2i(location.peer.getValue(), x, y); }
fan.vaseOpenGl.FanGlContext.prototype.uniform3f = function(location, x, y, z){ this.gl.uniform3f(location.peer.getValue(), x, y, z); }
fan.vaseOpenGl.FanGlContext.prototype.uniform3i = function(location, x, y, z){ this.gl.uniform3i(location.peer.getValue(), x, y, z); }
fan.vaseOpenGl.FanGlContext.prototype.uniform4f = function(location, x, y, z, w){ this.gl.uniform4f(location.peer.getValue(), x, y, z, w); }
fan.vaseOpenGl.FanGlContext.prototype.uniform4i = function(location, x, y, z, w){ this.gl.uniform4i(location.peer.getValue(), x, y, z, w); }
fan.vaseOpenGl.FanGlContext.prototype.useProgram = function(program){ this.gl.useProgram(program.peer.getValue()); }
fan.vaseOpenGl.FanGlContext.prototype.validateProgram = function(program){ this.gl.validateProgram(program.peer.getValue()); }
fan.vaseOpenGl.FanGlContext.prototype.vertexAttrib1f = function(indx, x){ this.gl.vertexAttrib1f(indx, x); }
fan.vaseOpenGl.FanGlContext.prototype.vertexAttrib2f = function(indx, x, y){ this.gl.vertexAttrib2f(indx, x, y); }
fan.vaseOpenGl.FanGlContext.prototype.vertexAttrib3f = function(indx, x, y, z){ this.gl.vertexAttrib3f(indx, x, y, z); }
fan.vaseOpenGl.FanGlContext.prototype.vertexAttrib4f = function(indx, x, y, z, w){ this.gl.vertexAttrib4f(indx, x, y, z, w); }
fan.vaseOpenGl.FanGlContext.prototype.vertexAttribPointer = function(indx, size, type, normalized, stride, offset){ this.gl.vertexAttribPointer(indx, size, type.m_val, normalized, stride, offset); }
fan.vaseOpenGl.FanGlContext.prototype.viewport = function(x, y, width, height){ this.gl.viewport(x, y, width, height); }