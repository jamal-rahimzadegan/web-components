import heroImg from '../../../assets/images/hero-image.png'

export const styles = `
<style>
.hero {
    background-image: linear-gradient(var(--shadow), var(--shadow)),
        url(${heroImg});
    height: 821px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    overflow-x: hidden;
    align-items: start;
    justify-content: center;
}

.here-btn-container {
    padding-top: 20px;
    display: flex;
    overflow-x: auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}

.here-btn-container ::-webkit-scrollbar {
    display: none;
}

.hero-btn {
    margin: 0 20px;
    text-transform: uppercase;
    min-width: max-content;
    max-width: max-content;
    color: var(--white);
    font-weight: bold;
}

.hero-btn:hover {
    border-bottom: 1px solid white;
}
</style>
`
