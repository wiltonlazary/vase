
//
// Copyright (c) 2011, chunquedong
// Licensed under the Academic Free License version 3.0
//
// History:
//   2019-03-31  Jed Young  Creation
//

using concurrent
using vaseWindow


class AsyncRunner {

  static Void init() {
    echo("AsyncRunner init")
    Actor.locals["async.runner"] = |Async<Obj> s| { run(s) }
  }

  private static Void run(Async<Obj> s) {
    if (s.next) {
      awaitObj := s.awaitObj
      echo("pause :" + awaitObj)

      if (awaitObj is Promise) {
        Promise promise = awaitObj
        promise.then |res, err| {
          s.awaitObj = res
          s.err = err
          Toolkit.cur.callLater(0) {
            s.run
          }
        }
      }
      else if (awaitObj is Future) {
        Future future := awaitObj

        |->|? checkFuture := null
        checkFuture = |->|{
          if (future.state.isComplete) {
            Obj? res := null
            try {
              res = future.get
            }
            catch (Err e) {
              res = e
            }
          }
          else {
            Toolkit.cur.callLater(100, checkFuture)
          }
        }
        Toolkit.cur.callLater(100, checkFuture)
      }
      else {
        Toolkit.cur.callLater(0) {
          s.run
        }
      }
    }
    echo("end: $s")
  }
}