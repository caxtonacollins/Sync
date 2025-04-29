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
            <a href="https://x.com/crowdchainHQ" target="_blank" className="hover:text-green-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>
            <a href="#" className="hover:text-green-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.078.037c-.211.375-.444.864-.608 1.25-1.844-.276-3.68-.276-5.486 0a13.23 13.23 0 00-.617-1.25.077.077 0 00-.078-.037c-1.699.405-3.32.953-4.882 1.515a.07.07 0 00-.032.028C.533 9.263-.319 14.09.1 18.861a.082.082 0 00.031.056c2.052 1.507 4.053 2.422 6.005 3.027a.078.078 0 00.084-.028c.465-.635.877-1.303 1.226-2.011a.078.078 0 00-.041-.107 12.16 12.16 0 01-1.746-.835.078.078 0 01-.008-.13c.117-.087.234-.18.344-.276a.078.078 0 01.08-.01c3.674 1.677 7.658 1.677 11.303 0a.078.078 0 01.081.009c.11.097.227.19.344.277a.078.078 0 01-.007.13c-.556.338-1.14.631-1.747.834a.078.078 0 00-.04.108c.36.708.772 1.376 1.226 2.01a.078.078 0 00.084.028c1.962-.605 3.963-1.52 6.006-3.027a.078.078 0 00.031-.056c.5-5.178-.83-9.963-3.549-14.464a.06.06 0 00-.031-.028zM8.02 15.865c-1.18 0-2.147-1.08-2.147-2.41s.951-2.41 2.147-2.41c1.197 0 2.147 1.08 2.147 2.41s-.95 2.41-2.147 2.41zm7.974 0c-1.18 0-2.147-1.08-2.147-2.41s.951-2.41 2.147-2.41c1.197 0 2.147 1.08 2.147 2.41s-.95 2.41-2.147 2.41z" />
              </svg>
            </a>
            <a href="https://t.me/crowdchainHQ" target="_blank" className="hover:text-green-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21.5 3.5L2.5 10.5C1.67 10.83 1.69 11.54 2.4 11.79L7.3 13.5L17.5 6.5C18 6.2 18.5 6.4 18.1 6.8L9 15.5V19C9 19.5 9.4 19.7 9.8 19.5L12.8 17.3L17 19.5C18 20 18.5 19.7 18.7 18.5L22 5.5C22.3 4.3 22 3.7 21.5 3.5Z"></path>
              </svg>
            </a>
            <a href="https://github.com/alexohre/crowdchain" target="_blank" className="hover:text-green-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
