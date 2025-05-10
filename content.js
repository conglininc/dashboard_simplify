// 定义要清空的元素选择器
const targetSelectors = {
    header: '.auxo-layout-header.header-wrap.header-wrap-daren',
    sider: '.auxo-layout-sider.auxo-layout-sider-dark',
    container: '.container-eg1dub',
    bottomGuides: '.bottomGuides-uFkrWK'
    //,leftCol: '.auxo-col.auxo-col-8.left-X38XS6'
};

function simplifyPage() {
    let success = false;
    
    // 清空顶部导航栏
    const headerElement = document.querySelector(targetSelectors.header);
    if (headerElement) {
        headerElement.innerHTML = '';
        headerElement.style.minHeight = '0';
        headerElement.style.height = '0';
        headerElement.style.overflow = 'hidden';
        success = true;
    }
    
    // 清空侧边栏
    const siderElement = document.querySelector(targetSelectors.sider);
    if (siderElement) {
        siderElement.innerHTML = '';
        siderElement.style.width = '0';
        siderElement.style.minWidth = '0';
        siderElement.style.overflow = 'hidden';
        success = true;
    }

    // 清空container元素
    const containerElement = document.querySelector(targetSelectors.container);
    if (containerElement) {
        containerElement.innerHTML = '';
        containerElement.style.display = 'none';
        success = true;
    }

    // 清空底部引导元素
    const bottomGuidesElement = document.querySelector(targetSelectors.bottomGuides);
    if (bottomGuidesElement) {
        bottomGuidesElement.innerHTML = '';
        bottomGuidesElement.style.display = 'none';
        success = true;
    }

    // 清空左侧列元素
    const leftColElement = document.querySelector(targetSelectors.leftCol);
    if (leftColElement) {
        leftColElement.innerHTML = '';
        leftColElement.style.display = 'none';
        success = true;
    }
    
    return success;
}

// 页面加载完成后自动执行
window.addEventListener('load', function() {
    // 延迟执行以确保所有元素都已加载
    setTimeout(simplifyPage, 1000);
});

// 监听来自popup的消息
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'simplify') {
        const success = simplifyPage();
        sendResponse({status: success ? 'success' : 'failed'});
    }
}); 