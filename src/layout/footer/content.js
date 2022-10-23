import { LONG_TEXTS } from "../../constants";

export const content = `
<footer>
<div>
  <app-text class="footer-title">Contact US</app-text>
  <app-text class="footer-content">+44 345 678 903</app-text>
  <app-text class="footer-content">adobexd@mail.com</app-text>
  <app-btn class="footer-content">Find a Store</app-btn>
</div>

<div>
  <app-text class="footer-title">CUSTOMER SERVICE</app-text>
  <app-btn class="footer-content">Contact Us</app-btn>
  <app-btn class="footer-content">Ordering & Payment</app-btn>
  <app-btn class="footer-content">Shipping</app-btn>
  <app-btn class="footer-content">Returns</app-btn>
  <app-btn class="footer-content">FAQ</app-btn>
</div>

<div>
  <app-text class="footer-title">INFORMATION</app-text>
  <app-btn class="footer-content">About this example</app-btn>
  <app-btn class="footer-content">Work With US</app-btn>
  <app-btn class="footer-content">Privacy Policy</app-btn>
  <app-btn class="footer-content">Terms & Conditions</app-btn>
  <app-btn class="footer-content">Press Enquiries</app-btn>
</div>

<div>
  <app-text class="footer-title">Subscribe to us via Email</app-text>
  <app-text class="footer-slogan">${LONG_TEXTS.FOOTER_SLOGAN}</app-text>
  <form class="footer-subscribe-form">
    <input placeholder="Email Address" />
    <app-btn>SUBSCRIBE</app-btn>
  </form>
</div>
</footer>
`;
