export const styles = `
<style>
* {
    user-select: none;
    cursor: pointer;
}

.wheel-size {
    height: 54px;
}

.wheel-size-text {
    font-size: 34px;
}

.wheel-selected{
    /*TODO: implement with better approach
       Better to not use important and hardcoded color but in this case (for IE) :(
     */
    border: 2px solid #008dff  !important;
}
</style>
`
