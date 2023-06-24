/** @noSelfInFile **/

import { boom } from 'boom.boom';
import * as utils from '../modules/utils';

interface Game {
	this: void;
	readonly __mainAtlas: hash;
}

export function init(this: Game): void {
	// Create properties that can be set in the editor.
	go.property('mainAtlas', resource.atlas());

	// Run all game logic inside `boom`.
	boom(() => {
		const player = add([
			sprite('sloth2', { atlas: 'mainAtlas' }),
			pos(120, 80),
			rotate(0),
			anchor('center'),
		]);

		// Use `utils` to satisfy TypeScript's type checker.
		if (utils.hasRotate(player)) {
			on_update((_cancel) => {
				player.rotate(player.angle - 120 * dt());
			});
		}

		// Run a lua-style loop 5 times.
		for (const i of $range(1, 5)) {
			const x = rand(0, width());
			const y = rand(0, height());
			add([sprite('snake2', { atlas: 'mainAtlas' }), pos(x, y)]);
		}
	});
}
