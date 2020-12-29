export default function sketch(p5) {
    class Triangle {
        constructor(size, offset, spin) {
            this.verticies = [
                [
                    size + offset,
                    size + offset,
                ],
                [
                    size * (Math.cos((4 * Math.PI) / 3)) + (Math.random() * 50) + offset,
                    size * (Math.sin((4 * Math.PI) / 3)) + (Math.random() * 50) + offset
                ],
                [
                    size * (Math.cos((2 * Math.PI) / 3)) + (Math.random() * 50) + offset,
                    size * (Math.sin((2 * Math.PI) / 3)) + (Math.random() * 50) + offset
                ]
            ]
            this.area = 0;
            this.offset = [offset, offset]
            this.spin = spin
            this.lines = []
        }

        init = () => {
            this.area = this.calculateArea(...this.verticies[0], ...this.verticies[1], ...this.verticies[2])
        }

        calculateArea = (x1, y1, x2, y2, x3, y3) => {
            return Math.abs(((x1 * (y2 - y3)) + (x2 * (y3 - y1)) + (x3 * (y1 - y2))) / 2);
        }

        rotate = () => {
            this.verticies = this.verticies.map((v) => {
                return [
                    (v[0] * Math.cos(this.spin)) - (v[1] * Math.sin(this.spin)),
                    (v[0] * Math.sin(this.spin)) + (v[1] * Math.cos(this.spin))
                ]
            })
        }

        plotLines = (...other) => {
            switch (other.length) {
                case 1:
                case 2:
                default:
                    this.lines = [
                        [...this.verticies[0], ...this.verticies[1]],
                        [...this.verticies[1], ...this.verticies[2]],
                        [...this.verticies[2], ...this.verticies[0]]
                    ]
                    break;
            }
        }

        // submerged = (other) => {
        //     let truthTable = []
        //     for (let v of this.verticies) {
        //         let innerAreas = this.calculateArea(...v, ...other.verticies[1], ...other.verticies[2]) +
        //             this.calculateArea(...other.verticies[0], ...v, ...other.verticies[2]) +
        //             this.calculateArea(...other.verticies[0], ...other.verticies[1], ...v)
        //         truthTable.push(
        //             other.area - 0.5 <= innerAreas && other.area + 0.5 >= innerAreas
        //         )
        //     }
        //     return truthTable.indexOf(false) === -1
        // }

        render = () => {
            p5.fill(0, 0);
            p5.strokeWeight(1)
            p5.translate(...this.offset)
            this.lines.forEach((line) => {
                p5.line(...line)
            })
        }
    }

    let triangles = [],
        propz = {
            height: 0,
            width: 0,
        }

    p5.myCustomRedrawAccordingToNewPropsHandler = (props) => {
        propz = {
            height: props.height,
            width: props.width
        }
        p5.resizeCanvas(propz.width, propz.height)
    }

    p5.setup = () => {
        p5.createCanvas(propz.width, propz.height)
        for (let i = 0; i < 2; i++) {
            triangles[i] = new Triangle(
                Math.random() * 50 + 50,
                i === 0 ? 0 : (Math.random() * 60) - 30,
                ((Math.round(Math.random()) * 2) - 1) * ((Math.random() * 0.01) + 0.002)
            )
            triangles[i].init()
        }
    }

    p5.draw = () => {
        p5.clear()
        p5.translate(propz.width / 2, propz.height / 2)
        for (let tri of triangles) {
            tri.rotate()
            tri.plotLines()
            tri.render()
        }
    }
}
