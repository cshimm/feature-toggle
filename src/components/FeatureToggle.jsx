export const FeatureToggle = ({isEnabled, featureName}) => {
    return <div>
        {
            isEnabled ? featureName : `Feature ${featureName} is disabled`
        }
    </div>;
}
