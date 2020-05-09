
module.exports = async (context, {owner, repo, tailDate}) => {
  context.log.debug('In getCommits.js...')
  let commits = await context.github.paginate(
    context.github.repos.getCommits({
      owner,
      repo,
      since: tailDate,
      per_page: 100
    }),
    res => res.data
  )
  return commits
}
