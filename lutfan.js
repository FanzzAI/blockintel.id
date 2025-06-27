// lutfan.js

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");

  searchInput.addEventListener("keyup", (e) => {
    const keyword = e.target.value.toLowerCase();
    const cards = document.querySelectorAll(".news-card");

    cards.forEach((card) => {
      const title = card.querySelector("h2").textContent.toLowerCase();
      if (title.includes(keyword)) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });

  // Sidebar gradient list
  const sidebar = document.querySelector(".menu");
  if (sidebar) {
    sidebar.innerHTML = `
      <li class="gradient-list">Apa itu cryptocurrency?</li>
      <li class="gradient-list">Blockchain, Nodes, Miner & Hash</li>
      <li class="gradient-list">Private key vs Public key</li>
      <li class="gradient-list">Wallet: hot vs cold</li>
      <li class="gradient-list">Exchange (CEX vs DEX)</li>
      <li class="gradient-list">Stablecoin & altcoin</li>
      <li class="gradient-list">Smart contracts</li>
      <li class="gradient-list">Layer 1 vs Layer 2</li>
      <li class="gradient-list">Gas fee & mekanisme konsensus (PoW, PoS)</li>
      <li class="gradient-list">Forks (soft fork, hard fork)</li>
      <li class="gradient-list">Tokenomics & coin burning</li>
      <li class="gradient-list">Spot vs Futures vs Options</li>
      <li class="gradient-list">Candlestick pattern</li>
      <li class="gradient-list">Indikator teknikal</li>
      <li class="gradient-list">Fundamental analysis</li>
      <li class="gradient-list">Technical analysis</li>
      <li class="gradient-list">Risk management & psikologi trading</li>
    `;
  }

  // Logo styling
  const logo = document.querySelector(".logo");
  if (logo) {
    logo.innerHTML = '<span class="logo-glow">BlockIntel.id</span>';
  }

  const newsSection = document.querySelector(".news-section");

  // Bitcoin Article
  if (newsSection && !document.querySelector(".bitcoin-card")) {
    const bitcoinCard = document.createElement("div");
    bitcoinCard.classList.add("news-card", "bitcoin-card");
    bitcoinCard.style.maxWidth = "100%";
    bitcoinCard.style.width = "100%";
    bitcoinCard.innerHTML = `
      <div class="thumbnail" style="width: 100%; height: auto;">
        <img src="https://images6.alphacoders.com/913/913441.jpg" alt="Bitcoin Thumbnail" style="width: 100%; aspect-ratio: 16 / 9; object-fit: cover; display: block;" />
      </div>
      <div class="news-info">
        <h2 style="font-size: 16px;">Definisi, Fungsi dan Cara Kerja Bitcoin</h2>
        <p class="meta">📅 June 27, 2025 — By BlockIntel.id</p>
        <p class="desc">
          Bitcoin is a decentralized digital currency that operates without a central authority, enabling peer-to-peer transactions across the world using blockchain technology.
        </p>
        <a href="#" class="btn-read">Read More →</a>
      </div>
    `;
    newsSection.appendChild(bitcoinCard);
  }

  // Blockchain Article
  if (newsSection && !document.querySelector(".blockchain-card")) {
    const blockchainCard = document.createElement("div");
    blockchainCard.classList.add("news-card", "blockchain-card");
    blockchainCard.style.maxWidth = "100%";
    blockchainCard.style.width = "100%";
    blockchainCard.innerHTML = `
      <div class="thumbnail" style="width: 100%; height: auto;">
        <img src="https://wallpaperaccess.com/full/3648424.jpg" alt="Blockchain Thumbnail" style="width: 100%; aspect-ratio: 16 / 9; object-fit: cover; display: block;" />
      </div>
      <div class="news-info">
        <h2 style="font-size: 16px;">Blockchain, Nodes, Miner & Hash</h2>
        <p class="meta">📅 June 28, 2025 — By BlockIntel.id</p>
        <p class="desc">
          This article explores the fundamental components of blockchain networks, including how nodes communicate, the role of miners, and how hashing secures the ledger.
        </p>
        <a href="#" class="btn-read">Read More →</a>
      </div>
    `;
    newsSection.appendChild(blockchainCard);
  }

  // Tools Section
  const oldAside = document.querySelector(".crypto-news");
  if (oldAside) oldAside.remove();

  const contentWrapper = document.querySelector(".wrapper");
  const cryptoTools = document.createElement("aside");
  cryptoTools.classList.add("crypto-news");
  cryptoTools.innerHTML = `
    <h3>📊 Trading & Investing Tools</h3>
    <ul class="crypto-list">
      <li class="gradient-list">TradingView</li>
      <li class="gradient-list">DexTools / DexScreener</li>
      <li class="gradient-list">CoinStats / Debank / Zerion</li>
      <li class="gradient-list">CoinMarketCap</li>
      <li class="gradient-list">isThisCoinScam</li>
      <li class="gradient-list">Token Terminal / Messari</li>
      <li class="gradient-list">Lookonchain / Arkham / Nansen</li>
      <li class="gradient-list">DefiLlama / TVL Aggregators</li>
      <li class="gradient-list">CryptoQuant / Glassnode</li>
    </ul>
  `;
  contentWrapper.appendChild(cryptoTools);

  // Wallet Tools
  const walletHeading = document.createElement("h3");
  walletHeading.textContent = "💼 Wallet Tools";
  cryptoTools.appendChild(walletHeading);

  const walletList = document.createElement("ul");
  walletList.classList.add("crypto-list");

  ["MetaMask", "Trust Wallet", "Phantom Wallet"].forEach(wallet => {
    const li = document.createElement("li");
    li.textContent = wallet;
    li.classList.add("gradient-list");
    walletList.appendChild(li);
  });

  cryptoTools.appendChild(walletList);

  // Exchange Tools
  const exchangeHeading = document.createElement("h3");
  exchangeHeading.textContent = "🏦 Exchange Tools";
  cryptoTools.appendChild(exchangeHeading);

  const exchangeList = document.createElement("ul");
  exchangeList.classList.add("crypto-list");

  ["Binance", "Coinbase", "OKX", "Indodax", "Triv", "Pluang", "Tokocrypto"].forEach(exchange => {
    const li = document.createElement("li");
    li.textContent = exchange;
    li.classList.add("gradient-list");
    exchangeList.appendChild(li);
  });

  cryptoTools.appendChild(exchangeList);
});