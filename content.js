function setFieldValue(selector, value) {
    const field = document.querySelector(selector);
    if (field) {
        field.value = value;
        return true; // 要素が見つかって値を設定できた
    }
    return false; // 要素が見つからなかった
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        try {

            //名前フィールドの設定a
            if (!setFieldValue('input[name*="name"]', request.fullName)){
                setFieldValue('input[name*="名前"]', request.fullName)
            }

            //メールフィールドの設定
            document.querySelector('input[name*="mail"]').value = request.email

            // 電話番号フィールドの設定
            if (!setFieldValue('input[name*="tel"]', request.number)) {
                if (!setFieldValue('input[name*="phone"]', request.number)) {
                    if (!setFieldValue('input[name*="電話番号"]', request.number)) {
                        setFieldValue('input[name*="電話"]', request.number);
                    }
                }
            }

            //会社名フィールドの設定
            if(!setFieldValue('input[name*="company"]', request.company)) {
                if(!setFieldValue('input[name*="会社"]', request.company)){
                    setFieldValue('input[name*="office"]',request.company)
                }
            }

            //部署フィールドの設定
            if(!setFieldValue('input[name*="department"]', request.department)){
                setFieldValue('input[name*="部署"]',request.department)
            }

            //テンプレートフィールドの設定
            setFieldValue('textarea', request.template)
            
            sendResponse({status: "Success!"});
        } catch (error) {
            console.log(error)
            sendResponse({status: "Exception occurred!"});
        }
    }
);

