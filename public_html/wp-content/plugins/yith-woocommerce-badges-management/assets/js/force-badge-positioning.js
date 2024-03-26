/* global yithWcbmForceBadgePositioning */

jQuery( function ($) {
	var $clonedBadgeContainer = $( '<div id="yith-wcbm-cloned-badges"></div>' ),
		$badges               = $( '.yith-wcbm-badge' ),
		cloneBadges           = function () {
			$clonedBadgeContainer.html( '' );
			$badges.each( function (index, badge) {
				var $badge   = $( badge ),
					position = $badge.show().offset(),
					css      = {
						top      : position.top,
						left     : position.left,
						right    : 'auto',
						bottom   : 'auto',
						position : 'absolute',
						transform: 'translate(0,0)',
						'z-index': 50,
					};
				$clonedBadgeContainer.append( $badge.clone().css( css ) );
				$badge.hide();
			} );
		},
		safeCloneBadges       = function () {
			cloneBadges();
			setTimeout( cloneBadges, 200 );
		};
	$( 'body' ).append( $clonedBadgeContainer );
	setTimeout( cloneBadges, yithWcbmForceBadgePositioning.timeout );

	$( window ).on( 'resize', safeCloneBadges );

	/**
	 * Proteo Integration
	 */
	if ( $( 'body' ).is( '.yith-wcbm-theme-yith-proteo' ) || 'yes' === yithWcbmForceBadgePositioning.onMobileScroll && 'yes' === yithWcbmForceBadgePositioning.isMobile ) {
		$( document ).on( 'scroll translated.owl.carousel', safeCloneBadges );
	}

} );
