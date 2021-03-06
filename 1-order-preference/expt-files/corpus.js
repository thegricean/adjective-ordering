
var stimuli =  makeStims();

function makeStims() {
	stims = [];
        
        nouns = ["cup", "ball"];
        dimensions = { "cup" : ["color", "material"],
                       "ball" : ["color", "texture"]
                     };
        values = { "color" : ["green", "blue", "red"], //, "purple", "yellow"],
                   "material" : ["glass", "wooden", "plastic", "metal"],
                   "texture" : ["spotted", "checkered", "striped", "solid"]
                 };
        
        // an ITEM is defined by noun, valuesDimA, valuesDimB. 
        // noun_index: 0, 1
        // condition_index: 0,1,2
        // order_index: 0,1: this one should better be randomized
        // choice of values for relevant dimension: 

        targets = []
        for(var noun_index = 0; noun_index <= 1; noun_index++) {
		noun = nouns[noun_index] //_.sample(nouns);
                relevant_dimension = dimensions[noun];

                targets[noun] = []
                
                valuesDimA = values[relevant_dimension[0]];
                valuesDimB = values[relevant_dimension[1]];
                for(val1 = 0; val1 < valuesDimA.length; val1++) {
                  for(val2 = 0; val2 < valuesDimB.length; val2++) {
                     targets[noun].push([valuesDimA[val1], valuesDimB[val2]]);
                  }
                }
        }
        console.log(targets);
        
	for(var noun_index = 0; noun_index <= 1; noun_index++) {
		noun = nouns[noun_index] //_.sample(nouns);

          targetsForNoun = _.shuffle(targets[noun])
          if(targetsForNoun.length != 12) {
             console.log("Unexpected length")
          }
                console.log(targetsForNoun[0]); 

          
          for(var condition_index = 0; condition_index <= 2; condition_index++) {
//            itemsForThisCondition = 5; // could differentiate between filler and critical conditions
  //          for(var valuesChoice = 0; valuesChoice <= 5; valuesChoice++) { // this is just to randomize how many items are presented in each the six conditions
            for(var orderCondition = 0; orderCondition <= 1; orderCondition++) {
                // for each of these 3*2 conditions, select 2 targets
              for(var target_num = 0; target_num <= 1; target_num++) {
                relevant_dimension = dimensions[noun];
             
                target = targetsForNoun.pop()

                console.log("....")

                console.log(noun) 
                console.log(target);

                valuesDimA = _.shuffle(values[relevant_dimension[0]]);
                valuesDimB = _.shuffle(values[relevant_dimension[1]]);
                for(var i = 0; i <= valuesDimA.length; i++) {
                   if(valuesDimA[i] == target[0]) {
                     valuesDimA.splice(i,1)
                     break;
                   }
                }
                for(var i = 0; i <= valuesDimB.length; i++) {
                   if(valuesDimB[i] == target[1]) {
                     valuesDimB.splice(i,1)
                     break;
                   }
                }               
                console.log(valuesDimA)
                console.log(valuesDimB)

                value1A = target[0]
                value2A = valuesDimA[0]
                value3A = valuesDimA[1]

                value1B = target[1]
                value2B = valuesDimB[0]
                value3B = valuesDimB[1]               

//                orderCondition = _.sample([0,1]);
                
                imgs = [];
                group = condition_index
                // with massive informativity difference
/*                if(group == 0) {// A is informative
			imgs.push([value1A+"_"+value1B+"_"+noun+".png","target"]);
			imgs.push([value1A+"_"+value2B+"_"+noun+".png","other"]);
			imgs.push([value2A+"_"+value1B+"_"+noun+".png","other"]);
			imgs.push([value2A+"_"+value1B+"_"+noun+".png","other"]);
			imgs.push([value2A+"_"+value1B+"_"+noun+".png","other"]);
			imgs.push([value2A+"_"+value1B+"_"+noun+".png","other"]);
			imgs.push([value3A+"_"+value1B+"_"+noun+".png","other"]);
			imgs.push([value3A+"_"+value1B+"_"+noun+".png","other"]);
			imgs.push([value3A+"_"+value1B+"_"+noun+".png","other"]);
			imgs.push([value3A+"_"+value3B+"_"+noun+".png","other"]);
                } else if(group == 1) {// B is informative
			imgs.push([value1A+"_"+value1B+"_"+noun+".png","target"]);
			imgs.push([value2A+"_"+value1B+"_"+noun+".png","other"]);
			imgs.push([value1A+"_"+value2B+"_"+noun+".png","other"]);
			imgs.push([value1A+"_"+value2B+"_"+noun+".png","other"]);
			imgs.push([value1A+"_"+value2B+"_"+noun+".png","other"]);
			imgs.push([value1A+"_"+value2B+"_"+noun+".png","other"]);
			imgs.push([value1A+"_"+value3B+"_"+noun+".png","other"]);
			imgs.push([value1A+"_"+value3B+"_"+noun+".png","other"]);
			imgs.push([value1A+"_"+value3B+"_"+noun+".png","other"]);
			imgs.push([value3A+"_"+value3B+"_"+noun+".png","other"]);
                } else*/
                 // with only mild informativity difference
                  if(group == 0) {// A is informative
			imgs.push([value1A+"_"+value1B+"_"+noun+".png","target"]);
			imgs.push([value1A+"_"+value2B+"_"+noun+".png","other"]);
			imgs.push([value2A+"_"+value1B+"_"+noun+".png","other"]);
			imgs.push([value2A+"_"+value1B+"_"+noun+".png","other"]);
			imgs.push([value2A+"_"+value1B+"_"+noun+".png","other"]);
			imgs.push([value2A+"_"+value2B+"_"+noun+".png","other"]);
			imgs.push([value3A+"_"+value2B+"_"+noun+".png","other"]);
			imgs.push([value3A+"_"+value2B+"_"+noun+".png","other"]);
			imgs.push([value3A+"_"+value3B+"_"+noun+".png","other"]);
			imgs.push([value3A+"_"+value3B+"_"+noun+".png","other"]);
                } else if(group == 1) {// B is informative
			imgs.push([value1A+"_"+value1B+"_"+noun+".png","target"]);
			imgs.push([value2A+"_"+value1B+"_"+noun+".png","other"]);
			imgs.push([value1A+"_"+value2B+"_"+noun+".png","other"]);
			imgs.push([value1A+"_"+value2B+"_"+noun+".png","other"]);
			imgs.push([value1A+"_"+value2B+"_"+noun+".png","other"]);
			imgs.push([value2A+"_"+value2B+"_"+noun+".png","other"]);
			imgs.push([value2A+"_"+value3B+"_"+noun+".png","other"]);
			imgs.push([value2A+"_"+value3B+"_"+noun+".png","other"]);
			imgs.push([value3A+"_"+value3B+"_"+noun+".png","other"]);
			imgs.push([value3A+"_"+value3B+"_"+noun+".png","other"]);
                } else if(group == 2) {// both equally uninformative
			imgs.push([value1A+"_"+value1B+"_"+noun+".png","target"]);
			imgs.push([value2A+"_"+value1B+"_"+noun+".png","other"]);
			imgs.push([value1A+"_"+value2B+"_"+noun+".png","other"]);
			imgs.push([value1A+"_"+value2B+"_"+noun+".png","other"]);
			imgs.push([value1A+"_"+value2B+"_"+noun+".png","other"]);
			imgs.push([value2A+"_"+value3B+"_"+noun+".png","other"]);
			imgs.push([value2A+"_"+value1B+"_"+noun+".png","other"]);
			imgs.push([value2A+"_"+value2B+"_"+noun+".png","other"]);
			imgs.push([value3A+"_"+value3B+"_"+noun+".png","other"]);
			imgs.push([value3A+"_"+value1B+"_"+noun+".png","other"]);
                }



				stims.push({
					"Predicate1":[value1A, value1B][[0,1][orderCondition]],
					//"Class1":"donotuse",	
					"Predicate2":[value1A, value1B][[1,0][orderCondition]],
					//"Class2":"donotuse",			
					"Noun":noun,
					//"NounClass":"donotuse",
                                        "imgs" : _.shuffle(imgs),
                                        "condition" : ["first_informative", "second_informative", "filler"][group],
//                                        "orderCondition" :   ,
                                        "item" : [value1A, value1B],
                                        "distractorValues" : [value2A, value2B, value3A, value3B]
				}			
			);
	}
}
}
}
		
	return stims;
	
}
