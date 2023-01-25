$('body').terminal({
	whoami: function () {
		this.echo("Hi, my name is Burim! Online, I use the name albo3. I'm a hobbyist musician and programmer.");
	},
	help: function () {
		this.echo('whoami	--	learn about me!'
		+ '\nposts	--	see my posts'
		+ "\nbazinga	--	shhhhh...it's a secret...");
	},
	bazinga: function () {
		this.echo('[[@;;;;https://pbs.twimg.com/profile_images/847178952556843014/kAdhNx7L_400x400.jpg]]');
	}
		
        }, {
            greetings: 'Welcome to albo3.com! :)'
		+ '\n--------------------------'
		+ '\nEnter "help" to get started.'
        });