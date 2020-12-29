class Form {
    constructor() {
        this.input = createInput("name")
        this.button = createButton("Play")
        this.greetings = createElement("h3")

    }

    hide() {
        this.greetings.hide();
        this.input.hide();
        this.button.hide();

    }

    display() {
        var title = createElement("h2")
        title.html("Car Racing Game!")
        title.position(130, 0)


        this.input.position(130, 160)
        this.button.position(250, 200)
        this.button.mousePressed( () => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1
            player.index = playerCount;
            player.update()
            player.updateCount(playerCount)
            this.greetings.html("Hello " + player.name)
            this.greetings.position(130,160)

        })

    }

}