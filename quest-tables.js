function rollLookup(die) {
	let result = 'Congratulations, you somehow rolled outside of the range of a d20.';
	if (die === 1) {
		result = 'Catastrophe! You automatically fail, and you may suffer a severe setback.';
	} else if (die >= 2 && die <= 5) {
		result = 'Failure. You fail your intended action and face a setback of the Guide\'s choice. You might lose equipment, take damage from an enemy counterattack, or face some other misfortune.';
	} else if (die >= 6 && die <= 10) {
		result = 'Tough Choice. You succeed in your action, but there\'s a cost. The Guide will give you a choice between two setbacks.';
	} else if (die >= 11 && die <= 19) {
		result = 'Success! You accomplish what you were trying to do without any compromises. If you\'re dealing damage, you deal the standard amount.';
	} else if (die === 20) {
		result = 'Triumph! This is an exciting moment. You automatically succeed at what you were trying to do, and you may even find added fortune. If you’re dealing damage, double it.';
	}

	return result;
}

module.exports = {
	rollLookup
};
