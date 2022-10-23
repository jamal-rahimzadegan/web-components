export const styles = `
<style>
        .car {
            position: relative;
            height: max-content;
            width: 100%;
            margin: 20px 0;
        }

        .car-base {
            width: 100%;
            object-fit: contain;
        }

        .car-wheel {
            position: absolute;
            bottom: 15%;
            width: 9%;
            transition: all 200ms;
            -webkit-animation: spin 0.5s linear infinite;
            -moz-animation: spin 0.5s linear infinite;
            animation: spin 0.5s linear infinite;
        }

        .rear-wheel {
            right: 26.7%;
        }

        .front-wheel {
            left: 25%;
        }

        @-moz-keyframes spin {
            100% {
                -moz-transform: rotate(-360deg);
            }
        }
        @-webkit-keyframes spin {
            100% {
                -webkit-transform: rotate(-360deg);
            }
        }
        @keyframes spin {
            100% {
                -webkit-transform: rotate(-360deg);
                transform: rotate(-360deg);
            }
        }

</style>

`
