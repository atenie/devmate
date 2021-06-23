* Spring Initializr was used for the project init. I _think_ that's normal procedure. Not entirely sure.
* Password data type is "text", although it should normally be chkpass. Many others should be char, but for the sake of the demo, I'll be using text.
* I'll be using the opening price as a value for "price", since this is what Google seems to be using.
* A good way this might be worth testing is via some crypto item, since stocks have a schedule whilst crypto never sleeps.
* No ID autoincrement reset. No idea how that would be _properly_ implemented.
* Too much time was wasted with the proper handling of the REST API.
* I am keeping the endpoint logging on the Java Spring part, for easier future reading.
* I honestly have no idea how the mailing system should work, to my utter embarrassment.
* I just noticed Spring has its own test system, different from the JUnit ones.
* The password checker is the ugliest ever.
* Axios was installed in the React project in order to later on make a connection to backend. This never happened.