window.difyChatbotConfig = {
  token: 'p19D6BloBVegO3vT',
  baseUrl: 'https://bot.aigenx.ai.vn'
};

(function() {
  var script = document.createElement('script');
  script.src = "https://bot.aigenx.ai.vn/embed.min.js";
  script.id = "p19D6BloBVegO3vT";
  script.defer = true;
  document.head.appendChild(script);

  var style = document.createElement('style');
  style.innerHTML = `
    #dify-chatbot-bubble-button {
      background-color: #1C64F2 !important;
    }
  `;
  document.head.appendChild(style);
})();