<?php
/**
 * Created by PhpStorm.
 * User: ghostsf
 * Date: 2018/4/14
 * Time: 下午3:16
 */

namespace Flarum\Core\Search\Discussion\Fulltext;

use Flarum\Core\Post;
use Flarum\Core\Discussion;

class MySqlFulltextLikeModeDriver implements DriverInterface
{
    /**
     * {@inheritdoc}
     */
    public function match($string)
    {
        $discussionTitleIds = Discussion::where('title', 'like', "%$string%")
            ->lists('id');
        $discussionIds = Post::where('type', 'comment')
            ->where('content', 'like', "%$string%")
            ->lists('discussion_id', 'id');

        $relevantPostIds = [];
        foreach ($discussionTitleIds as $discussionId) {
            $relevantPostIds[$discussionId][] = 0;
        }

        foreach ($discussionIds as $postId => $discussionId) {
            $relevantPostIds[$discussionId][] = $postId;
        }

        return $relevantPostIds;
    }

}