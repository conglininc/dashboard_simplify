document.getElementById('simplifyBtn').addEventListener('click', async () => {
    // 获取当前标签页
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    
    // 向content script发送消息
    chrome.tabs.sendMessage(tab.id, {action: 'simplify'}, (response) => {
        if (response && response.status === 'success') {
            window.close(); // 关闭popup
        }
    });
}); 