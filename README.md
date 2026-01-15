POC nodejs Reactor Pattern/Architecture

## What is Reactor Pattern?

The Reactor Pattern is an architectural pattern for building event-driven, non-blocking systems that must handle many concurrent I/O sources using very few threads.

It is based on three core components:

- Event demultiplexer (OS level)
- Event loop
- Event handlers (callbacks)

Node.js is a direct implementation of this pattern, using libuv as its reactor engine.

![](reactor-pattern.webp)