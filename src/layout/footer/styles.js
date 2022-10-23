export const styles = `
<style>
footer {
    background: var(--black);
    height: max-content;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 var(--landing-inline-padding) 35px var(--landing-inline-padding);
}

.footer-title {
    display: inline-block;
    color: var(--white);
    text-transform: uppercase;
    font-weight: bold;
    font-size: 10px;
    margin: 20px 0;
}

.footer-content {
    color: var(--white);
    font-size: 14px;
    letter-spacing: 0;
    margin-bottom: 5px;
    display: block;
}

.footer-slogan {
    display: block;
    color: var(--med-blue);
    font-size: 14px;
    width: 260px;
    line-break: anywhere;
    margin: 20px 0;
}

.footer-subscribe-form {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
}

.footer-subscribe-form input {
    border: 1px solid var(--med-blue);
    border-radius: var(--radius-normal);
    background: transparent;
    width: 200px;
    padding: 10px;
    margin: 0 5px 5px 0;
    color: var(--white);
}

.footer-subscribe-form app-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    background: var(--white);
    color: var(--med-blue);
    border-radius: var(--radius-normal);
    height: 40px;
    width: 100px;
    font-size: 10px;
    font-weight: bold;
}
</style>
`
