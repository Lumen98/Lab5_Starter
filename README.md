# Lab 5 - Starter

Lab Partners: None except for me.


Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

## Check Your Understanding

1) No, a unit test would not be ideal for testing the message feature. Sending a message involves multiple components working together, the UI for composing the message, network requests to deliver it, server-side logic, and database storage on the receiving end. Since unit tests only test isolated pieces of code, they cannot verify that all of these components interact correctly at the same time. An integration or end-to-end test would be more appropriate for this feature.

2) Yes, I think a unit test would be a good choice for testing the max message length feature. Checking whether a string exceeds 80 characters is a small, self-contained piece of logic with a clear input and output. You can easily write unit tests that pass in strings of various lengths and verify that the function correctly allows or rejects them without needing any other part of the application.
