/** @noSelfInFile **/

export type BoomHasAnchor = BoomBlankGameObject & AnchorComp;
export const hasAnchor = (obj: BoomGameObject): obj is BoomHasAnchor => {
	return obj.is('anchor');
};

export type BoomHasArea = BoomBlankGameObject & AreaComp;
export const hasArea = (obj: BoomGameObject): obj is BoomHasArea => {
	return obj.is('area');
};

export type BoomHasBody = BoomBlankGameObject & BodyComp;
export const hasBody = (obj: BoomGameObject): obj is BoomHasBody => {
	return obj.is('body');
};

export type BoomHasColor = BoomBlankGameObject & ColorComp;
export const hasColor = (obj: BoomGameObject): obj is BoomHasColor => {
	return obj.is('color');
};

export type BoomHasDoubleJump = BoomBlankGameObject & DoubleJumpComp;
export const hasDoubleJump = (
	obj: BoomGameObject
): obj is BoomHasDoubleJump => {
	return obj.is('double_jump');
};

export type BoomHasFadeIn = BoomBlankGameObject & FadeInComp;
export const hasFadeIn = (obj: BoomGameObject): obj is BoomHasFadeIn => {
	return obj.is('fadein');
};

export type BoomHasFixed = BoomBlankGameObject & FixedComp;
export const hasFixed = (obj: BoomGameObject): obj is BoomHasFixed => {
	return obj.is('fixed');
};

export type BoomHasHealth = BoomBlankGameObject & HealthComp;
export const hasHealth = (obj: BoomGameObject): obj is BoomHasHealth => {
	return obj.is('health');
};

export type BoomHasLifespan = BoomBlankGameObject & LifespanComp;
export const hasLifespan = (obj: BoomGameObject): obj is BoomHasLifespan => {
	return obj.is('lifespan');
};

export type BoomHasMove = BoomBlankGameObject & MoveComp;
export const hasMove = (obj: BoomGameObject): obj is BoomHasMove => {
	return obj.is('move');
};

export type BoomHasOffscreen = BoomBlankGameObject & OffscreenComp;
export const hasOffscreen = (obj: BoomGameObject): obj is BoomHasOffscreen => {
	return obj.is('offscreen');
};

export type BoomHasOpacity = BoomBlankGameObject & OpacityComp;
export const hasOpacity = (obj: BoomGameObject): obj is BoomHasOpacity => {
	return obj.is('opacity');
};

export type BoomHasPos = BoomBlankGameObject & PosComp;
export const hasPos = (obj: BoomGameObject): obj is BoomHasPos => {
	return obj.is('pos');
};

export type BoomHasRotate = BoomBlankGameObject & RotateComp;
export const hasRotate = (obj: BoomGameObject): obj is BoomHasRotate => {
	return obj.is('rotate');
};

export type BoomHasScale = BoomBlankGameObject & ScaleComp;
export const hasScale = (obj: BoomGameObject): obj is BoomHasScale => {
	return obj.is('scale');
};

export type BoomHasSprite = BoomBlankGameObject & SpriteComp;
export const hasSprite = (obj: BoomGameObject): obj is BoomHasSprite => {
	return obj.is('sprite');
};

export type BoomHasStay = BoomBlankGameObject & StayComp;
export const hasStay = (obj: BoomGameObject): obj is BoomHasStay => {
	return obj.is('stay');
};

export type BoomHasText = BoomBlankGameObject & TextComp;
export const hasText = (obj: BoomGameObject): obj is BoomHasText => {
	return obj.is('text');
};

export type BoomHasTimer = BoomBlankGameObject & TimerComp;
export const hasTimer = (obj: BoomGameObject): obj is BoomHasTimer => {
	return obj.is('timer');
};

export type BoomHasZ = BoomBlankGameObject & ZComp;
export const hasZ = (obj: BoomGameObject): obj is BoomHasZ => {
	return obj.is('z');
};
