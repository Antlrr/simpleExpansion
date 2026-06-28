function updateSerpuloDocking(isEnabled) {
    const serpuloCoreUnits = [
        UnitTypes.alpha,
        UnitTypes.beta,
        UnitTypes.gamma
    ];

    serpuloCoreUnits.forEach(unit => {
        if (unit != null) {
            unit.coreUnitDock = isEnabled;
        }
    });
    
    Log.info("Serpulo core unit docking set to: " + isEnabled);
}

//only bcs the unit spawning at core pmo me sometimes
Events.on(ClientLoadEvent, () => {
    const serpDocking = "setting-serpulo-dock";
    Vars.ui.settings.game.checkPref(
        serpDocking, 
        false, 
        value => {
            updateSerpuloDocking(value);
        }
    );
    
    const savedSetting = Core.settings.get(serpDocking, false);
    updateSerpuloDocking(savedSetting);
});
