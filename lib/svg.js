class Svg{
    constructor(){
        this.textL = '';
        this.shapeL = '';
    }


    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeL}${this.textL}</svg>`
    }

    setText(text,textColor){
        this.textL = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
    }

    setShape(shape){
        this.shapeL = shape.render()
    }
    

}

module.exports = Svg
