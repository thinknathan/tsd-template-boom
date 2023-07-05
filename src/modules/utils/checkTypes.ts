/** @noSelfInFile **/

export type BoomHasAnchor = BoomBlankGameObject & AnchorComp;
export const hasAnchor = (
	obj: BoomBlankGameObject & Partial<BoomComponent>
): obj is BoomHasAnchor => {
	return obj.is('anchor');
};

export type BoomHasArea = BoomBlankGameObject & AreaComp;
export const hasArea = (
	obj: BoomBlankGameObject & Partial<BoomComponent>
): obj is BoomHasArea => {
	return obj.is('area');
};

export type BoomHasBody = BoomBlankGameObject & BodyComp;
export const hasBody = (
	obj: BoomBlankGameObject & Partial<BoomComponent>
): obj is BoomHasBody => {
	return obj.is('body');
};

export type BoomHasColor = BoomBlankGameObject & ColorComp;
export const hasColor = (
	obj: BoomBlankGameObject & Partial<BoomComponent>
): obj is BoomHasColor => {
	return obj.is('color');
};

export type BoomHasDoubleJump = BoomBlankGameObject & DoubleJumpComp;
export const hasDoubleJump = (
	obj: BoomBlankGameObject & Partial<BoomComponent>
): obj is BoomHasDoubleJump => {
	return obj.is('double_jump');
};

export type BoomHasFadeIn = BoomBlankGameObject & FadeInComp;
export const hasFadeIn = (
	obj: BoomBlankGameObject & Partial<BoomComponent>
): obj is BoomHasFadeIn => {
	return obj.is('fadein');
};

export type BoomHasFixed = BoomBlankGameObject & FixedComp;
export const hasFixed = (
	obj: BoomBlankGameObject & Partial<BoomComponent>
): obj is BoomHasFixed => {
	return obj.is('fixed');
};

export type BoomHasHealth = BoomBlankGameObject & HealthComp;
export const hasHealth = (
	obj: BoomBlankGameObject & Partial<BoomComponent>
): obj is BoomHasHealth => {
	return obj.is('health');
};

export type BoomHasLifespan = BoomBlankGameObject & LifespanComp;
export const hasLifespan = (
	obj: BoomBlankGameObject & Partial<BoomComponent>
): obj is BoomHasLifespan => {
	return obj.is('lifespan');
};

export type BoomHasMove = BoomBlankGameObject & MoveComp;
export const hasMove = (
	obj: BoomBlankGameObject & Partial<BoomComponent>
): obj is BoomHasMove => {
	return obj.is('move');
};

export type BoomHasOffscreen = BoomBlankGameObject & OffscreenComp;
export const hasOffscreen = (
	obj: BoomBlankGameObject & Partial<BoomComponent>
): obj is BoomHasOffscreen => {
	return obj.is('offscreen');
};

export type BoomHasOpacity = BoomBlankGameObject & OpacityComp;
export const hasOpacity = (
	obj: BoomBlankGameObject & Partial<BoomComponent>
): obj is BoomHasOpacity => {
	return obj.is('opacity');
};

export type BoomHasPos = BoomBlankGameObject & PosComp;
export const hasPos = (
	obj: BoomBlankGameObject & Partial<BoomComponent>
): obj is BoomHasPos => {
	return obj.is('pos');
};

export type BoomHasRotate = BoomBlankGameObject & RotateComp;
export const hasRotate = (
	obj: BoomBlankGameObject & Partial<BoomComponent>
): obj is BoomHasRotate => {
	return obj.is('rotate');
};

export type BoomHasScale = BoomBlankGameObject & ScaleComp;
export const hasScale = (
	obj: BoomBlankGameObject & Partial<BoomComponent>
): obj is BoomHasScale => {
	return obj.is('scale');
};

export type BoomHasSprite = BoomBlankGameObject & SpriteComp;
export const hasSprite = (
	obj: BoomBlankGameObject & Partial<BoomComponent>
): obj is BoomHasSprite => {
	return obj.is('sprite');
};

export type BoomHasStay = BoomBlankGameObject & StayComp;
export const hasStay = (
	obj: BoomBlankGameObject & Partial<BoomComponent>
): obj is BoomHasStay => {
	return obj.is('stay');
};

export type BoomHasText = BoomBlankGameObject & TextComp;
export const hasText = (
	obj: BoomBlankGameObject & Partial<BoomComponent>
): obj is BoomHasText => {
	return obj.is('text');
};

export type BoomHasTimer = BoomBlankGameObject & TimerComp;
export const hasTimer = (
	obj: BoomBlankGameObject & Partial<BoomComponent>
): obj is BoomHasTimer => {
	return obj.is('timer');
};

export type BoomHasZ = BoomBlankGameObject & ZComp;
export const hasZ = (
	obj: BoomBlankGameObject & Partial<BoomComponent>
): obj is BoomHasZ => {
	return obj.is('z');
};
