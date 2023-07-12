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
		const PLAYER_START_X = 120;
		const PLAYER_START_Y = 80;
		const player = add([
			sprite('sloth2', { atlas: 'mainAtlas' }),
			pos(PLAYER_START_X, PLAYER_START_Y),
			rotate(0),
			area({
				shape: 'auto',
			}),
			anchor('center'),
		]);

		const ROTATION_RATE = 120;
		on_update((_cancel) => {
			player.rotate(player.angle - ROTATION_RATE * dt());
		});

		const LOOP_MAX = 5;
		// Run a lua-style loop 5 times.
		for (const i of $range(1, LOOP_MAX)) {
			print(`Running loop ${i}`);
			const x = rand(0, width());
			const y = rand(0, height());
			add([sprite('snake2', { atlas: 'mainAtlas' }), pos(x, y)]);
		}

		const NEW_ROTATION = 180;
		player.on_collide('item-damage-up', (collision) => {
			// If you have an unknown object, you can use
			// `utils` to satisfy TypeScript's type checker.
			if (utils.hasRotate(collision.target)) {
				collision.target.rotate(NEW_ROTATION);
			}
		});
	});
}
