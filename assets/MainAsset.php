<?php

namespace humhub\modules\translation\assets;

class MainAsset extends \yii\web\AssetBundle
{
    public $sourcePath = '@translation/assets';
    public $js = [
        'js/translation.js',
        'js/jquery.showLoading.js',
        'js/color_progress.js',
        'js/copy_actions.js'
    ];
    public $css = [
        'css/translation.css',
        'css/showLoading.css',
		'css/google_bar.css'
    ];
}