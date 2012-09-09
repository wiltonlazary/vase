//
// Copyright (c) 2011, chunquedong
// Licensed under the Academic Free License version 3.0
//
// History:
//   2011-10-05  Jed Young  Creation
//

using fgfx2d
using fgfxWtk

**
** WidgetGroup is a Widget Container
**
@Js
class WidgetGroup : Widget
{

  Layout layout := FixedLayout()

//////////////////////////////////////////////////////////////////////////
// Widget Tree
//////////////////////////////////////////////////////////////////////////

  private Widget[] children := Widget[,]


  **
  ** Iterate the children widgets.
  **
  Void each(|Widget w, Int i| f)
  {
    children.each(f)
  }

  **
  ** Remove a child widget
  **
  This remove(Widget? child)
  {
    if (child == null) return this
    if (children.removeSame(child) == null)
      throw ArgErr("not my child: $child")
    child.setParent(null)
    return this
  }

  **
  ** Remove all child widgets.  Return this.
  **
  virtual This removeAll()
  {
    children.dup.each |Widget kid| { remove(kid) }
    return this
  }

  **
  ** Add a child widget.
  ** If child is already parented throw ArgErr.  Return this.
  **
  @Operator virtual This add(Widget child)
  {
    if (child.parent != null)
      throw ArgErr("Child already parented: $child")
    child.setParent(this)
    children.add(child)
    return this
  }

  Int indexSame(Widget child)
  {
    return children.indexSame(child)
  }

  Int childrenSize() { children.size }
  Widget getChild(Int i) { children[i] }

  override Widget? findById(Str id)
  {
    if (id == this.id) return this
    return children.eachWhile
    {
      it.findById(id)
    }
  }

  Void moveToTop(Widget child)
  {
    Int? i := children.indexSame(child)
    if (i == children.size -1) return
    if (i != null)
    {
      children.removeAt(i)
      children.add(child)
    }
    else
    {
      this.add(child)
    }
  }

  override Void onMounted()
  {
    children.each { it.onMounted }
  }

//////////////////////////////////////////////////////////////////////////
// layout
//////////////////////////////////////////////////////////////////////////

  override This relayout() { layout.layoutChildren(this); return this }
  override Size prefSize(Int hintsWidth := -1, Int hintsHeight := -1) { layout.prefSize(this, hintsWidth, hintsHeight) }

//////////////////////////////////////////////////////////////////////////
// event
//////////////////////////////////////////////////////////////////////////

  override Void touch(MotionEvent e) {
    p := mapToWidget(Point(e.x, e.y))
    if (p == null) return
    children.eachr {
      if (it.enabled && it.visible) {
        if (it.bounds.contains(p.x, p.y)) {
          it.touch(e)
        }
      }
    }
  }

  override Void keyPress(KeyEvent e) {
    children.eachr {
      if (it.enabled) {
        it.keyPress(e)
      }
    }
  }

//////////////////////////////////////////////////////////////////////////
// Paint
//////////////////////////////////////////////////////////////////////////

  override Void paint(Graphics g)
  {
    if (!visible) return
    super.paint(g)
    paintChildren(g)

    //debug
    //g.brush = Color.black
    //g.drawLine(0, 0, size.w, size.h)
    //g.drawLine(size.w, 0, 0, size.h)
  }

  protected virtual Void paintChildren(Graphics g)
  {
    children.each
    {
      if (it.visible)
      {
        g.push
        g.clip(it.bounds)
        g.transform = g.transform.translate(it.pos.x.toFloat, it.pos.y.toFloat)
        it.paint(g)
        g.pop
      }
    }
  }

}