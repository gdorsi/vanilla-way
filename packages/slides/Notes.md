#Frameworks

They give to you abstractions that are essential if you have to write a very complex web application.
I'm talking about applications where you have huge amount of data & state transitions that needs powerful abstractions to be implemented and optimized.

And using this frameworks can make SSR very costly and complex, because you need to write code that runs on your server and in the users browser.

And frameworks will be a big part of code that have an impact on your application startup time.

#DOM perf

The first concern about reading/writing on the DOM can be the performances.

But we are writing a Frontend Vanilla JS application, and every state transition is 'crafted' by hand.

So it doesen't happen often that you go out your FPS time budget

So i say "Measure, then optimize"

Because it's better to optimize tha small number of cases than everything.
