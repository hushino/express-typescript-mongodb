import { App } from "./app";
import { startConnection } from './databases'

async function main() {
    startConnection()
    const app = new App(3000)
    await app.listen()

}
main()