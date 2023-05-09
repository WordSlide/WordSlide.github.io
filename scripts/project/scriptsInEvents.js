function downloadContent(name, content) {
  var atag = document.createElement("a");
  var file = new Blob([content], {type: 'text/plain'});
  atag.href = URL.createObjectURL(file);
  atag.download = name;
  atag.click();
}


const scriptsInEvents = {

	async Gamesheet_Event96_Act2(runtime, localVars)
	{
		PokiSDK.gameplayStop();
	},

	async Gamesheet_Event96_Act3(runtime, localVars)
	{
		 PokiSDK.rewardedBreak().then(
		 
		        (withReward) => {
		            if(withReward){
		               
		                //resume game
						runtime.callFunction("rewardedSuccessful");
						PokiSDK.gameplayStart();
		            }else{
					runtime.callFunction("unpauseGame");
					PokiSDK.gameplayStart();
					}
		        }
		
		    )
	},

	async Gamesheet_Event116_Act1(runtime, localVars)
	{
		PokiSDK.gameplayStop();
	},

	async Gamesheet_Event118_Act3(runtime, localVars)
	{
		  PokiSDK.commercialBreak()
		   .then(() => {
		   runtime.callFunction("pokiCommercialReplay"); 
		   PokiSDK.gameplayStart();
		   });
	},

	async Gamesheet_Event119_Act3(runtime, localVars)
	{
		  PokiSDK.commercialBreak()
		   .then(() => {
		   runtime.callFunction("pokiCommercialReplay"); 
		   PokiSDK.gameplayStart();
		   });
	},

	async Gamesheet_Event120_Act3(runtime, localVars)
	{
		  PokiSDK.commercialBreak()
		   .then(() => {
		   runtime.callFunction("pokiCommercial"); 
		   PokiSDK.gameplayStart();
		   });
	},

	async Gamesheet_Event132_Act1(runtime, localVars)
	{
		PokiSDK.gameplayStop();
	},

	async Gamesheet_Event148_Act4(runtime, localVars)
	{
		PokiSDK.customEvent('game', 'segment', { label: 'level', value: runtime.globalVars.Level });
	},

	async Creatorsheet_Event44_Act1(runtime, localVars)
	{
		downloadContent(runtime.globalVars.FileName,runtime.globalVars.Content)
	},

	async Menusheet_Event15_Act2(runtime, localVars)
	{
		PokiSDK.gameplayStart();
	},

	async Menusheet_Event17_Act3(runtime, localVars)
	{
		PokiSDK.gameplayStart();
	},

	async Menusheet_Event23_Act3(runtime, localVars)
	{
		PokiSDK.gameplayStart();
	},

	async Menusheet_Event169_Act1(runtime, localVars)
	{
		PokiSDK.init();
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

