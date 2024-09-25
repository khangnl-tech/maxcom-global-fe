window.difyChatbotConfig = {
    token: '6IqXbjuCnrv6aS7T',
    baseUrl: 'http://workflow.aiwow.vn'
  };
  
  (function() {
    var script = document.createElement('script');
    script.src = "http://workflow.aiwow.vn/embed.min.js";
    script.id = "6IqXbjuCnrv6aS7T";
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