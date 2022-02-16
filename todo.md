- **Themes**
    - Default themes:
        - Light
        - Dark

***

- **Plugins**
    - Default plugins
        - Display scripts on vsc in app

***

- **Language support**
    - Default languages
        - English
        - Turkish
    - It will detect the language from device's language

***

- **Engine API**
    - 2D Pathfinder
    - 2D & 3D Matrix class

<br><br><br><br>

## Engine Algorithm, Logic and API

*Note: They will be able to use engine class from code.*

- **Vector2**
    - constructor(x: float, y: float)
    - x: int
    - y: int
    - getDirectionTo(vector2: Vector2): Vector2
    - getDirectionFrom(angle: int): Vector2
    - getAngleTo(vector2: Vector2): angle(float)
    - distance(vector2: Vector2): float
    - add(xOrVector2: Vector2 | float, y?: float, z?: float): Vector2(clone)
    - subtract(xOrVector2: Vector2 | float, y?: float, z?: float): Vector2(clone)
    - floor(): Vector2(clone)
    - round(): Vector2(clone)
    - clone(): Vector2

***

- **Model `ABSTRACT`**
    - alpha(opacity): int

***

- **ImageModel extends Model**
    - constructor(width: int, height: int)
    - width: int
    - height: int
    - image: Image

***

- **TextModel extends Model**
    - constructor(width: int, height: int)
    - text: string
    - font: string
    - size: int
    - color: string
    - maxWidth: int

***

- **PathModel extends Model**
    - constructor(width: int, height: int)
    - path: {offsetX: int, offsetY: int}[]
    - fillColor: string | null
    - strokeColor: string | null

***

- **RectangleModel extends PathModel**
    - width: int
    - height: int

***

- **CircleModel extends Model**
    - radius: int
    - fillColor: string | null
    - strokeColor: string | null

***

- **Collision `ABSTRACT`**
    - offsetX: int
    - offsetY: int
    - collides(Collision): boolean `ABSTRACT`

***

- **RectangleCollision extends Collision**
    - width: int
    - height: int

***

- **CircleCollision extends Collision**
    - radius: int

***

- **Entity extends Vector2**
    - actors: Model[]
    - collisions: Collision[]
    - currentActor: int
