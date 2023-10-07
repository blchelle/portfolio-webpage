import { ITool } from '@components/Tool';

import { ReactComponent as bashLogo } from '@assets/logos/bash.svg';
import { ReactComponent as circleciLogo } from '@assets/logos/circleci.svg';
import { ReactComponent as cppLogo } from '@assets/logos/cpp.svg';
import { ReactComponent as concourseLogo } from '@assets/logos/concourse.svg';
import { ReactComponent as cssLogo } from '@assets/logos/css.svg';
import { ReactComponent as dockerLogo } from '@assets/logos/docker.svg';
import { ReactComponent as expressLogo } from '@assets/logos/express.svg';
import { ReactComponent as elasticLogo } from '@assets/logos/elastic.svg';
import { ReactComponent as firebaseLogo } from '@assets/logos/firebase.svg';
import { ReactComponent as goLogo } from '@assets/logos/go.svg';
import { ReactComponent as gitLogo } from '@assets/logos/git.svg';
import { ReactComponent as grafanaLogo } from '@assets/logos/grafana.svg';
import { ReactComponent as htmlLogo } from '@assets/logos/html.svg';
import { ReactComponent as jsLogo } from '@assets/logos/javascript.svg';
import { ReactComponent as kubernetesLogo } from '@assets/logos/kubernetes.svg';
import { ReactComponent as mongoDbLogo } from '@assets/logos/mongodb.svg';
import { ReactComponent as mysqlLogo } from '@assets/logos/mysql.svg';
import { ReactComponent as nodeLogo } from '@assets/logos/node.svg';
import { ReactComponent as postgresqlLogo } from '@assets/logos/postgresql.svg';
import { ReactComponent as prometheusLogo } from '@assets/logos/prometheus.svg';
import { ReactComponent as protobufLogo } from '@assets/logos/protobuf.svg';
import { ReactComponent as reactLogo } from '@assets/logos/react.svg';
import { ReactComponent as railsLogo } from '@assets/logos/rails.svg';
import { ReactComponent as redisLogo } from '@assets/logos/redis.svg';
import { ReactComponent as reduxLogo } from '@assets/logos/redux.svg';
import { ReactComponent as rubyLogo } from '@assets/logos/ruby.svg';
import { ReactComponent as sassLogo } from '@assets/logos/sass.svg';
import { ReactComponent as sidekiqLogo } from '@assets/logos/sidekiq.svg';
import { ReactComponent as splunkLogo } from '@assets/logos/splunk.svg';
import { ReactComponent as tailwindLogo } from '@assets/logos/tailwind.svg';
import { ReactComponent as tsLogo } from '@assets/logos/typescript.svg';
import { ReactComponent as webpackLogo } from '@assets/logos/webpack.svg';

interface ISkillCategory {
	title: string;
	skills: ITool[];
}

const SKILLS: ISkillCategory[] = [
	{
		title: 'Backend',
		skills: [
			{ name: 'Ruby', Logo: rubyLogo },
			{ name: 'Ruby on Rails', Logo: railsLogo },
			{ name: 'Go', Logo: goLogo },
			{ name: 'Protobuf', Logo: protobufLogo },
			{ name: 'Node', Logo: nodeLogo },
			{ name: 'Express', Logo: expressLogo },
			{ name: 'C++', Logo: cppLogo },
			{ name: 'Sidekiq', Logo: sidekiqLogo },
		],
	},
	{
		title: 'Frontend',
		skills: [
			{ name: 'TypeScript', Logo: tsLogo },
			{ name: 'JavaScript', Logo: jsLogo },
			{ name: 'React', Logo: reactLogo },
			{ name: 'Redux', Logo: reduxLogo },
			{ name: 'HTML', Logo: htmlLogo },
			{ name: 'CSS', Logo: cssLogo },
			{ name: 'SASS', Logo: sassLogo },
			{ name: 'Tailwind', Logo: tailwindLogo },
			{ name: 'Webpack', Logo: webpackLogo },
		],
	},
	{
		title: 'Databases',
		skills: [
			{ name: 'MongoDB', Logo: mongoDbLogo },
			{ name: 'Redis', Logo: redisLogo },
			{ name: 'MySQL', Logo: mysqlLogo },
			{ name: 'PostgreSQL', Logo: postgresqlLogo },
			{ name: 'Elastic', Logo: elasticLogo },
			{ name: 'Prometheus', Logo: prometheusLogo },
			{ name: 'Firebase', Logo: firebaseLogo },
		],
	},
	{
		title: 'DevOps / SRE',
		skills: [
			{ name: 'Git', Logo: gitLogo },
			{ name: 'Docker', Logo: dockerLogo },
			{ name: 'Kubernetes', Logo: kubernetesLogo },
			{ name: 'Concourse', Logo: concourseLogo },
			{ name: 'CircleCI', Logo: circleciLogo },
			{ name: 'Splunk', Logo: splunkLogo },
			{ name: 'Grafana', Logo: grafanaLogo },
			{ name: 'Bash', Logo: bashLogo },
		],
	},
];

export default SKILLS;
