window.onload = () => {
    // supported chromebook user-agent
    const userAgent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36';

    // change our user-agent
    tizen.websetting.setUserAgentString(userAgent, () => {
        // wait a moment
        window.setTimeout(() => {
            // and navigate to geforce now
            window.location.href = "https://play.geforcenow.com/";
        }, 2000);
    });
};