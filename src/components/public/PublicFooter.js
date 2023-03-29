import { useEffect, useState } from 'react'
import styles from './PublicApp.module.css'
import './../../App.css'

function PublicFooter () {
  return (
    <div>
      <footer class='footer'>
        <div class='footer_container'>
          <div class='row'>
            <div class='col-md-4'>
              <h3>About Meta Code</h3>
              <p>
                Meta Code is an online platform that provides programming
                lessons to beginners and advanced learners alike. Our mission is
                to help people learn to code and advance their careers in tech.
              </p>
            </div>
            <div class='col-md-4'>
              <h3>Donate</h3>
              <p>
                If you find our lessons helpful and want to support our work,
                please consider making a donation. Your contribution helps us
                create more high-quality content for our community.
              </p>
              <button class='btn btn-primary'>Donate Now</button>
            </div>
            <div class='col-md-4'>
              <h3>Contact Us</h3>
              <p>
                If you have any questions or feedback, please don't hesitate to
                reach out to us via email. We'd love to hear from you!
              </p>
              <a href='mailto:metacodetyping@gmail.com' class='btn btn-primary'>
                Email Us
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div class='row justify-content-center'>
          <div class='col-md-12 text-center'>
            <p>This portal was created by Lazari Peter</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default PublicFooter
