declare const _default: {
    rpc: {};
    types: {
        EmaConfig: {
            emaPeriod: string;
            emaPeriodEstimateAfter: string;
            smoothing: string;
        };
        EmaMarketVolume: {
            config: string;
            ema: string;
            multiplier: string;
            lastTime: string;
            state: string;
            startTime: string;
            volumesPerPeriod: string;
        };
        FeeSigmoid: {
            config: string;
        };
        FeeSigmoidConfig: {
            m: string;
            p: string;
            n: string;
            initialFee: string;
            minRevenue: string;
        };
        MarketVolumeState: {
            _enum: string[];
        };
        Rikiddo: {
            config: string;
            fees: string;
            maShort: string;
            maLong: string;
        };
        RikiddoConfig: {
            initialFee: string;
            log2E: string;
        };
        Timespan: {
            _enum: {
                Seconds: string;
                Minutes: string;
                Hours: string;
                Days: string;
                Weeks: string;
            };
        };
        UnixTimestamp: string;
    };
};
export default _default;
