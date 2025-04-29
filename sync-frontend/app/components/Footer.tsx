export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[var(--color-linear-gradient3)] via-[var(--color-linear-gradient2)] to-[var(--color-linear-gradient1)]  text-gray-300 py-12 px-4">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8"> {/* Increased the gap here */}
          <div>
            <h1 className="text-3xl font-extrabold mb-4"> KryptoSync</h1>
            <p>
              <span className="textext-[var(--color-text-white)]">KryptoSync</span> is the best platform to buy, sell and exchange multiple cryptos with ease.
            </p>
            <form action="" className="flex gap-2 py-6">
              <input
                type="email"
                placeholder="Your email"
                className="px-2 py-2 bg-[var(--color-background-primary)] text-[var(--color-text-tertiary-light)] border border-gray-200 rounded-lg w-[241.5px] focus:outline-none w-full"
              />
              <button className="bg-[var(--color-active-button)] gap-2 px-3 py-2 rounded-lg hover:bg-green-600 w-[126px] h-[42px]">
                Subscribe
              </button>
            </form>
          </div>

          <div className="sm:ml-16"> {/* Added margin-left here for spacing */}
            <h4 className="font-bold text-xl mb-3 uppercase">Company</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-green-300">About</a></li>
              <li><a href="contact" className="hover:text-green-300">Contact</a></li>
              <li><a href="affiliates" className="hover:text-green-300">Affiliates</a></li>
              <li><a href="#" className="hover:text-green-300">Careers</a></li>
              <li><a href="reviews" className="hover:text-green-300">Reviews</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-xl uppercase">Products</h4>
            <ul className="space-y-2">
              <li><a href="/buy" className="hover:text-green-300">Buy</a></li>
              <li><a href="sell" className="hover:text-green-300">Sell</a></li>
              <li><a href="/swap" className="hover:text-green-300">Swap</a></li>
              <li><a href="recieve" className="hover:text-green-300">Recieve</a></li>
              <li><a href="/gateway" className="hover:text-green-300">Gateway</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-xl uppercase">Learn</h4>
            <ul className="space-y-2">
              <li><a href="/blog" className="hover:text-green-300">Blog</a></li>
              <li><a href="/support" className="hover:text-green-300">Support</a></li>
              <li><a href="/pricing" className="hover:text-green-300">Pricing</a></li>
              <li><a href="/community" className="hover:text-green-300">Community</a></li>
              <li><a href="/community" className="hover:text-green-300">Status</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-xl uppercase">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/policy" className="hover:text-green-300">AML Policy</a></li>
              <li><a href="/PrivacyPolicy" className="hover:text-green-300">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-green-300">Terms of Service</a></li>
              <li><a href="/cookie" className="hover:text-green-300">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-12 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 KryptoSync. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            
            <a href="#" className="hover:text-green-300">
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
            </a>
            <a href="https://x.com/crowdchainHQ" target="_blank" className="hover:text-green-300">
              <svg className="w-5 h-5"  fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>
            <a href="https://t.me/crowdchainHQ" target="_blank" className="hover:text-green-300">
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
        
            <a href="https://github.com/alexohre/crowdchain" target="_blank" className="hover:text-green-300">
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
      
              </svg>
            </a>

            <a  className="w-5 h-5" href="https://github.com/alexohre/crowdchain" target="_blank" className="hover:text-green-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-youtube-icon lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/>
          
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
