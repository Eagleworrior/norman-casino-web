var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: async function() {
        // Start AdMob
        await admob.start();

        // Banner Ad
        const banner = new admob.BannerAd({
            adUnitId: 'ca-app-pub-6944429902972543/4184786691'
        });
        await banner.show();

        // Interstitial Ad
        const interstitial = new admob.InterstitialAd({
            adUnitId: 'ca-app-pub-6944429902972543/2860230183'
        });

        // Rewarded Ad
        const rewarded = new admob.RewardedAd({
            adUnitId: 'ca-app-pub-6944429902972543/4927022720'
        });

        console.log("AdMob initialized successfully");
    }
};

app.initialize();

