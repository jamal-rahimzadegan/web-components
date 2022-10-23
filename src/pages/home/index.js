import { content } from './content'

export default function Home() {
    const app = document.getElementById('app')
    app.innerHTML = content

    return app
}
