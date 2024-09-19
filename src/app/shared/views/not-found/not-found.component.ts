import { Component } from '@angular/core';

@Component({
  selector: 'tid-not-found',
  standalone: true,
  imports: [],
  template: `
    <div id="ntf-cnt">
      <div class="ntf-inr-cnt">
        <div class="ntf-inr-cnt-404">
          <h1 class="sts-code">404</h1>
          <h2 class="sts-msg">Page not found</h2>
        </div>
        <a href="/">Homepage</a>
      </div>
    </div>
  `,
  styles: `
    #ntf-cnt {
      position: relative;
      height: 100vh;
      background: var(--color-kohl);
      .ntf-inr-cnt {
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        max-width: 767px;
        width: 100%;
        line-height: 1.4;
        text-align: center;
        .ntf-inr-cnt-404 {
          position: relative;
          height: 180px;
          margin-bottom: 20px;
          z-index: -1;
          .sts-code {
            font-family: geometria, sans-serif;
            position: absolute;
            left: 50%;
            top: 50%;
            -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            font-size: 224px;
            font-weight: 900;
            margin-top: 0;
            margin-bottom: 0;
            margin-left: -12px;
            color: var(--color-kohl);
            text-transform: uppercase;
            text-shadow: -1px -1px 0 var(--color-baingani),
              1px 1px 0 var(--color-gulabi);
            letter-spacing: -20px;
          }
          .sts-msg {
            font-family: geometria, sans-serif;
            position: absolute;
            left: 0;
            right: 0;
            top: 110px;
            font-size: 42px;
            font-weight: 700;
            color: #fff;
            text-transform: uppercase;
            text-shadow: 0 2px 0 var(--color-baingani);
            letter-spacing: 13px;
            margin: 0;
          }
        }
        a {
          font-family: geometria, sans-serif;
          display: inline-block;
          text-transform: uppercase;
          color: var(--color-gulabi);
          text-decoration: none;
          border: 2px solid;
          background: 0 0;
          padding: 10px 40px;
          font-size: 14px;
          font-weight: 700;
          -webkit-transition: 0.2s all;
          transition: 0.2s all;
          &:hover {
            color: var(--color-baingani);
          }
        }
      }
    }

    @media only screen and (max-width: 767px) {
      .ntf-inr-cnt .ntf-inr-cnt-404 .sts-msg {
        font-size: 24px;
      }
    }

    @media only screen and (max-width: 480px) {
      .ntf-inr-cnt .ntf-inr-cnt-404 .sts-code {
        font-size: 182px;
      }
    }

  `
})
export class NotFoundComponent {}
